import React from "react";
import "./NewsCard.css";

function NewsCard({
  loggedIn,
  saved,
  title,
  source,
  date,
  text,
  image,
  link,
  keyWord,
  clicked,
  saveNewArticle,
  deleteSavedArticle,
  deleteFromSaved,
  _id,
}) {
  const [marked, setmarked] = React.useState(false);
  const today = new Date(date);
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const finalDate = new Date(year, month, day).toLocaleString("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  React.useEffect(() => {
    if (clicked) {
      setmarked(!marked);
    }
  }, []);

  const getMarked = () => {
    if (marked) {
      const allArticles = JSON.parse(localStorage.getItem("allArticles"));
      const markedIndex = allArticles.findIndex(function (article) {
        return article.link === link;
      });
      allArticles[markedIndex].clicked = false;
      deleteSavedArticle(_id, markedIndex, allArticles);
    } else {
      const allArticles = JSON.parse(localStorage.getItem("allArticles"));
      const markedIndex = allArticles.findIndex(function (article) {
        return article.link === link;
      });
      const article = allArticles[markedIndex];
      article.clicked = true;
      saveNewArticle(
        keyWord,
        title,
        text,
        date,
        source,
        link,
        image,
        markedIndex,
        allArticles
      );
    }
    setmarked(!marked);
  };

  const deleteSaved = () => {
    console.log(_id);
    deleteFromSaved(_id);
  };

  return (
    <li className="news-card">
      <img
        className="news-card__image"
        alt="картинка карточки"
        src={image}
      ></img>
      <div
        className={`news-card__icons ${saved ? "news-card__icons_saved" : ""}`}
      >
        <div
          className={`news-card__icons-key ${
            saved ? "" : "news-card_invisable"
          }`}
        >
          <p className="news-card__icons-key-text">{keyWord}</p>
        </div>
        <div className="news-card__icons-group">
          <button
            onClick={getMarked}
            disabled={!loggedIn}
            className={`news-card__icons-button ${
              saved ? "news-card_invisable" : ""
            } ${loggedIn ? "" : "news-card_disabled"}`}
          >
            <div
              className={`news-card__icons-button_flag-normal ${
                marked ? "news-card__icons-button_flag-marked" : ""
              } `}
            ></div>
          </button>
          <div
            className={`news-card__icons-message ${
              saved ? "news-card_invisable" : ""
            }`}
          >
            <p className="news-card__icons-messege-text">
              Войдите, чтобы сохранять статьи
            </p>
          </div>
        </div>
        <div className="news-card__icons-group">
          <button
            onClick={deleteSaved}
            disabled={!loggedIn}
            className={`news-card__icons-button ${
              saved ? "" : "news-card_invisable"
            } ${loggedIn ? "news-card_disabled" : ""}`}
          >
            <div className="news-card__icons-button_bucket"></div>
          </button>
          <div
            className={`news-card__icons-message ${
              saved ? "" : "news-card_invisable"
            }`}
          >
            <p className="news-card__icons-messege-text">
              Убрать из сохранённых
            </p>
          </div>
        </div>
      </div>
      <a
        className="news-card__link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="news-card__info">
          <p className="news-card__date">{finalDate}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__text">{text}</p>
          <p className="news-card__source">{source}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
