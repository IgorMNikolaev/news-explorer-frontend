import React from 'react';
import './SearchForm.css';



function SearchForm() {
  return (
<section className='searchform'>
  <h1 className='searchform__title'>Что творится в мире?</h1>
  <p className='searchform__text'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
  <form
    //  onSubmit={onSubmit}
    className='searchform__form'
    noValidate>
    <input
      type='text'
      name='search'
      className="searchform__input"
      placeholder="Введите тему новости"
      required
      maxLength="100"
      // value={name}
      // onChange={handleCardNameChange}
      />
      <span className="searchform__error"></span>
    <button type="submit" className="searchform__button">Искать</button>
  </form>
</section>
  );
}

export default SearchForm;
