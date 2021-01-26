import React from "react";
import "./SavedNewsHeader.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader({ savedArticles, sortedNews }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="saved-news-header">
      <h4 className="saved-news-header__header">Сохранённые статьи</h4>
      <p className="saved-news-header__greeting">
        {currentUser}, у вас {savedArticles.length}{" "}
        {savedArticles.length < 5 ? "сохранённые статьи" : "сохранённых статей"}
      </p>
      {sortedNews.length < 4 ? (
        <p className="saved-news-header__text">
          По ключевым словам:
          <span className="saved-news-header__bold-text">
            {" "}
            {sortedNews[0]}, {sortedNews[1]}, {sortedNews[2]}
          </span>
        </p>
      ) : (
        <p className="saved-news-header__text">
          По ключевым словам:
          <span className="saved-news-header__bold-text">
            {" "}
            {sortedNews[0]}{" "}
          </span>
          ,
          <span className="saved-news-header__bold-text">
            {" "}
            {sortedNews[1]}{" "}
          </span>
          и
          <span className="saved-news-header__bold-text">
            {" "}
            {sortedNews.length - 2}-м другим
          </span>
        </p>
      )}
    </section>
  );
}

export default SavedNewsHeader;
