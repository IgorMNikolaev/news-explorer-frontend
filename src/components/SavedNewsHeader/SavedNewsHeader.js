import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <h4 className="saved-news-header__header">Сохранённые статьи</h4>
      <p className="saved-news-header__greeting">
        Грета, у вас 5 сохранённых статей
      </p>
      <p className="saved-news-header__text">
        По ключевым словам:
        <span className="saved-news-header__bold-text"> Природа</span>,
        <span className="saved-news-header__bold-text"> Тайга</span> и
        <span className="saved-news-header__bold-text"> 2-м другим</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
