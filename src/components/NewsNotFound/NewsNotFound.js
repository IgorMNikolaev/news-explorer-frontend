import React from "react";
import "./NewsNotFound.css";

function NewsNotFound() {
  return (
    <section className="news-not-found">
      <div className="news-not-found__no-match">
        <div className="news-not-found__image"></div>
        <h3 className="news-not-found__title">Ничего не найдено</h3>
        <p className="news-not-found__text">
          К сожалению по вашему запросу
          <br />
          ничего не найдено.
        </p>
      </div>
    </section>
  );
}

export default NewsNotFound;
