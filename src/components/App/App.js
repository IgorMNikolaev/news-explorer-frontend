import React, { useLayoutEffect } from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import AuthPopup from "../AuthPopup/AuthPopup";
import EntrancePopup from "../EntrancePopup/EntrancePopup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  registrationReq,
  authorizationReq,
  getContent,
} from "../../utils/auth";
import { getToken, removeToken, setToken } from "../../utils/token";
import MainApi from "../../utils/MainApi";
import NewsApi from "../../utils/NewsApi";
import { sortByFrequency } from "../../utils/utils";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isAuthPopupOpen, setAuthPopupOpen] = React.useState(false);
  const [isEntrancePopupOpen, setEntrancePopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [articles, setArticles] = React.useState([]);
  const [noResults, setNoResults] = React.useState(false);
  const [resultsError, setResultsError] = React.useState(false);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [articlesNumber, setArticlesNumber] = React.useState(3);
  const [searchedArticles, setSearchedArticles] = React.useState([]);
  const [sortedNews, setSortedNews] = React.useState([]);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      getSavedArticles();
    }
    const allArticles = JSON.parse(localStorage.getItem("allArticles"));
    setSearchedArticles(allArticles);

    if (allArticles) {
      setArticles(allArticles.slice(0, articlesNumber));
    }
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const BASE_URL = "https://api.five.students.nomoredomains.monster";
  // const BASE_URL = "http://localhost:3000";

  const thisdaydate = new Date().toISOString().slice(0, 10);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const finalDate = new Date(year, month, day + 8).toISOString().slice(0, 10);

  const mainApi = new MainApi({
    baseUrl: BASE_URL,
  });

  //
  const newsApi = new NewsApi({
    apiKey: "ecd21e8eea6c4ee183c41786542767c8",
    from: thisdaydate,
    to: finalDate,
  });

  const tokenCheck = () => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    getContent(jwt)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
      .then(() => {
        getSavedArticles();
      });
  };

  function handleAuthPopupClick() {
    setAuthPopupOpen(true);
  }

  function handleEntrancePopupClick() {
    setEntrancePopupOpen(true);
  }

  function infoTooltipOpen() {
    setInfoTooltipOpen(true);
  }

  function closeAllPopups() {
    setAuthPopupOpen(false);
    setEntrancePopupOpen(false);
    setInfoTooltipOpen(false);
  }

  const handleLogin = () => {
    setLoggedIn(true);
  };

  function register(email, password, name) {
    registrationReq(email, password, name)
      .then((res) => {
        if (res.data) {
          closeAllPopups();
          handleEntrancePopupClick();
          setMessage("");
          infoTooltipOpen();
        } else {
          setMessage("Что-то пошло не так!");
        }
      })
      .catch((err) => console.log(err));
  }

  function authorize(email, password) {
    authorizationReq(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          return data.token;
        } else {
          return;
        }
      })
      .then((token) => {
        if (!token) {
          setMessage("Что-то пошло не так!");
        }
        if (token) {
          setMessage("");
          handleLogin();
          getSavedArticles();
          mainApi
            .getProfileInfo()
            .then((res) => {
              const { name } = res;
              setCurrentUser(name);
              localStorage.setItem("user", name);
            })
            .catch((error) => {
              console.log(error);
            });
          closeAllPopups();
        }
      })
      .catch((err) => console.log(err));
  }

  function onSignOut() {
    removeToken();
    setLoggedIn(false);
    localStorage.removeItem("allArticles");
  }

  const handleNewsSearch = (keyWord) => {
    setLoading(true);
    newsApi
      .getArticle(keyWord)
      .then((res) => {
        const { articles } = res;
        const items = articles.map((article) => ({
          title: article.title,
          source: article.source.name,
          date: article.publishedAt,
          text: article.description,
          image: article.urlToImage,
          link: article.url,
          keyWord: keyWord,
          clicked: false,
        }));
        localStorage.setItem("allArticles", JSON.stringify(items));
        setArticles(items.slice(0, articlesNumber));
        setSearchedArticles(items);

        if (articles.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setResultsError(true);
      })
      .finally(setLoading(false));
  };

  const getSavedArticles = () => {
    mainApi
      .getArticles()
      .then((res) => {
        setSavedArticles(res);
        setSortedNews(
          sortByFrequency(savedArticles.map((article) => article.keyWord))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveNewArticle = (
    keyWord,
    title,
    text,
    date,
    source,
    link,
    image,
    markedIndex,
    allArticles
  ) => {
    mainApi
      .postNewArticle(
        keyWord,
        title,
        text,
        date,
        source,
        link,
        image,
        markedIndex,
        allArticles
      )
      .then((article) => {
        setSavedArticles([...savedArticles, article]);
        setSortedNews(
          sortByFrequency(savedArticles.map((article) => article.keyWord))
        );
        allArticles[markedIndex]._id = article._id;
        localStorage.setItem("allArticles", JSON.stringify(allArticles));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteSavedArticle = (_id, markedIndex, allArticles) => {
    mainApi
      .deleteArticle(_id)
      .then(() => {
        setSavedArticles(
          savedArticles.filter((article) => article._id !== _id)
        );
        setSortedNews(
          sortByFrequency(savedArticles.map((article) => article.keyWord))
        );
        allArticles[markedIndex]._id = "";
        localStorage.setItem("allArticles", JSON.stringify(allArticles));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFromSaved = (_id) => {
    mainApi
      .deleteArticle(_id)
      .then(() => {
        const allArticles = JSON.parse(localStorage.getItem("allArticles"));
        const markedIndex = allArticles.findIndex(function (article) {
          return article._id === _id;
        });
        setSavedArticles(
          savedArticles.filter((article) => article._id !== _id)
        );
        setSortedNews(
          sortByFrequency(savedArticles.map((article) => article.keyWord))
        );
        allArticles[markedIndex]._id = "";
        allArticles[markedIndex].clicked = false;
        localStorage.setItem("allArticles", JSON.stringify(allArticles));
        setArticles(allArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleredirect = () => {
    setSortedNews(
      sortByFrequency(savedArticles.map((article) => article.keyWord))
    );
    const allArticles = JSON.parse(localStorage.getItem("allArticles"));
    if (allArticles) {
      setArticles(allArticles.slice(0, articlesNumber));
    }
    setSortedNews(
      sortByFrequency(savedArticles.map((article) => article.keyWord))
    );
  };

  function moreArticles() {
    setArticlesNumber(articlesNumber + 3);
    const allArticles = JSON.parse(localStorage.getItem("allArticles"));
    const show = allArticles.slice(0, articlesNumber + 3);
    setArticles(show);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className="app">
        <Switch>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
              onAuth={handleAuthPopupClick}
              onSignOut={onSignOut}
              onNewsSearch={handleNewsSearch}
              articles={articles}
              noResults={noResults}
              resultsError={resultsError}
              isLoading={isLoading}
              saveNewArticle={saveNewArticle}
              deleteSavedArticle={deleteSavedArticle}
              handleredirect={handleredirect}
              moreArticles={moreArticles}
              searchedArticles={searchedArticles}
            />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            loggedIn={loggedIn}
            logged={true}
            savedArticles={savedArticles}
            component={SavedNews}
            onSignOut={onSignOut}
            deleteFromSaved={deleteFromSaved}
            handleEntrancePopupClick={handleEntrancePopupClick}
            sortedNews={sortedNews}
          />
        </Switch>
        <Footer />
        <AuthPopup
          isOpen={isAuthPopupOpen}
          onClose={closeAllPopups}
          isLoading={isLoading}
          onEntrance={handleEntrancePopupClick}
          register={register}
          message={message}
        />
        <EntrancePopup
          isOpen={isEntrancePopupOpen}
          onClose={closeAllPopups}
          isLoading={isLoading}
          onAuth={handleAuthPopupClick}
          authorize={authorize}
          message={message}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          onEntrance={handleEntrancePopupClick}
        />
      </section>
    </CurrentUserContext.Provider>
  );
}

export default App;
