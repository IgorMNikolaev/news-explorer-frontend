import React from "react";
import "./Results.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function Results({ loggedIn }) {
  return (
    <section className="results">
      <h2 className="results__header">Результаты поиска</h2>
      <NewsCardList loggedIn={loggedIn} saved={false} />
      <button className="results__button">Показать еще</button>
    </section>
  );
}

export default Results;
