import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  saved,
  articles,
  savedArticles,
  saveNewArticle,
  deleteSavedArticle,
  deleteFromSaved,
  ...rest
}) {
  return (
    <ul className="news-card-list">
      {!saved &&
        articles.map((article) => (
          <NewsCard
            saved={saved}
            key={article.link}
            {...article}
            {...rest}
            saveNewArticle={saveNewArticle}
            deleteSavedArticle={deleteSavedArticle}
          />
        ))}
      {saved &&
        savedArticles.map((savedArticle) => (
          <NewsCard
            saved={saved}
            key={savedArticle.link}
            {...savedArticle}
            {...rest}
            saveNewArticle={saveNewArticle}
            deleteSavedArticle={deleteSavedArticle}
            deleteFromSaved={deleteFromSaved}
          />
        ))}
    </ul>
  );
}

export default NewsCardList;
