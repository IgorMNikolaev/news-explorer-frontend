import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NewsNotFound from "../NewsNotFound/NewsNotFound";
import NewsError from "../NewsError/NewsError";
import Results from "../Results/Results";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({
  loggedIn,
  onAuth,
  onSignOut,
  onNewsSearch,
  articles,
  noResults,
  resultsError,
  isLoading,
  saveNewArticle,
  deleteSavedArticle,
  handleredirect,
  moreArticles,
  searchedArticles,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <div className="main__upper-block">
        <Header
          theme=""
          loggedIn={loggedIn}
          onAuth={onAuth}
          onSignOut={onSignOut}
          handleredirect={handleredirect}
        />
        <SearchForm onNewsSearch={onNewsSearch} />
      </div>
      {isLoading && <Preloader />}
      {noResults && <NewsNotFound />}
      {articles.length > 0 && (
        <Results
          loggedIn={loggedIn}
          articles={articles}
          saveNewArticle={saveNewArticle}
          deleteSavedArticle={deleteSavedArticle}
          moreArticles={moreArticles}
          searchedArticles={searchedArticles}
        />
      )}
      {resultsError && <NewsError />}
      <About />
    </main>
  );
}

export default Main;
