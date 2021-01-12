import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NewsNotFound from '../NewsNotFound/NewsNotFound';
import Results from '../Results/Results';

function Main({ loggedIn, onAuth }) {
  return (
    <main className="main">
      <div className="main__upper-block">
      <Header theme="" loggedIn={loggedIn} onAuth={onAuth}/>
      <SearchForm />
      </div>
      <Results loggedIn={loggedIn}/>
      <About/>
      <Preloader />
      <NewsNotFound />
    </main>
  );
}

export default Main;
