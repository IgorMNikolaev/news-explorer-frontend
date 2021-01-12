import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList( { loggedIn, saved } ) {
  return (
<ul className="news-card-list">
  <NewsCard loggedIn={loggedIn} saved={saved}/>
  <NewsCard loggedIn={loggedIn} saved={saved}/>
  <NewsCard loggedIn={loggedIn} saved={saved}/>
  <NewsCard loggedIn={loggedIn} saved={saved}/>
  <NewsCard loggedIn={loggedIn} saved={saved}/>
  <NewsCard loggedIn={loggedIn} saved={saved}/>
  <NewsCard loggedIn={loggedIn} saved={saved}/>
  <NewsCard loggedIn={loggedIn} saved={saved}/>
</ul>
  );
}

export default NewsCardList;
