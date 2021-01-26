import React from "react";
import "./SavedNews.css";
import "../Header/Header.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Header from "../Header/Header";

function SavedNews({
  loggedIn,
  onSignOut,
  savedArticles,
  deleteFromSaved,
  sortedNews,
  ...rest
}) {
  return (
    <section className="saved-news">
      <Header theme="_white" loggedIn={loggedIn} onSignOut={onSignOut} />
      <SavedNewsHeader savedArticles={savedArticles} sortedNews={sortedNews} />
      <NewsCardList
        loggedIn={loggedIn}
        saved={true}
        savedArticles={savedArticles}
        deleteFromSaved={deleteFromSaved}
      />
    </section>
  );
}

export default SavedNews;
