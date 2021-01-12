import React from 'react';
import './SavedNews.css';
import '../Header/Header.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Header from '../Header/Header';

function SavedNews({ loggedIn }) {
  return (
<section className="saved-news">
  <Header theme="_white" loggedIn={loggedIn} />
  <SavedNewsHeader />
  <NewsCardList loggedIn={loggedIn} saved={true}/>
</section>
  );
}

export default SavedNews;
