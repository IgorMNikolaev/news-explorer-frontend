import React from "react";
import "./SearchForm.css";

function SearchForm({ onNewsSearch }) {
  const [keyWord, setKeyWord] = React.useState("");

  function handleKeyWordChange(e) {
    setKeyWord(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewsSearch(keyWord);
  };

  return (
    <section className="searchform">
      <h1 className="searchform__title">Что творится в мире?</h1>
      <p className="searchform__text">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <form className="searchform__form" noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="searchform__input"
          placeholder="Введите тему новости"
          required
          maxLength="100"
          value={keyWord}
          onChange={handleKeyWordChange}
        />
        <span className="searchform__error"></span>
        <button type="submit" className="searchform__button">
          Искать
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
