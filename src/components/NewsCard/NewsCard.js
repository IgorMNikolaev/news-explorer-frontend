import React from "react";
import "./NewsCard.css";

function NewsCard({ loggedIn, saved }) {
  const [marked, setmarked] = React.useState(false);

  return (
    <li className="news-card">
      <div className="news-card__image">
        <div
          className={`news-card__icons ${
            saved ? "news-card__icons_saved" : ""
          }`}
        >
          <div
            className={`news-card__icons-key ${
              saved ? "" : "news-card_invisable"
            }`}
          >
            <p className="news-card__icons-key-text">Природа</p>
          </div>
          <div className="news-card__icons-group">
            <button
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
      </div>
      <div className="news-card__info">
        <p className="news-card__date">2 августа, 2019</p>
        <h3 className="news-card__title">
          «Первозданная тайга»: новый фотопроект Игоря Шпиленка
        </h3>
        <p className="news-card__text">
          Знаменитый фотограф снимает первозданные леса России, чтобы рассказать
          о необходимости их сохранения. В этот раз он отправился в
          Двинско-Пинежскую тайгу, где...
        </p>
        <p className="news-card__source">Лента.ру</p>
      </div>
    </li>
  );
}

export default NewsCard;
