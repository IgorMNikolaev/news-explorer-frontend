import React from "react";
import "./Results.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function Results({
  loggedIn,
  articles,
  saveNewArticle,
  deleteSavedArticle,
  moreArticles,
  searchedArticles,
}) {
  return (
    <section className="results">
      <h2 className="results__header">Результаты поиска</h2>
      <NewsCardList
        loggedIn={loggedIn}
        saved={false}
        articles={articles}
        saveNewArticle={saveNewArticle}
        deleteSavedArticle={deleteSavedArticle}
      />
      {articles.length !== searchedArticles.length && (
        <button onClick={moreArticles} className="results__button">
          Показать еще
        </button>
      )}
    </section>
  );
}

export default Results;
