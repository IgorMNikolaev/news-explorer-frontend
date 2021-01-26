import React from "react";
import "./NewsError.css";

function NewsNotFound() {
  return (
    <section className="news-error">
      <p className="news-error__error">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз.
      </p>
    </section>
  );
}

export default NewsNotFound;
