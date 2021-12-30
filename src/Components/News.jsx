import React from 'react';
import SelectorForNewsPage from './SelectorForNewsPage';
import NewsCards from './Cards/NewsCards';

const News = () => {
  return (
    <>
      <div className="select-news">
        <SelectorForNewsPage />
      </div>
      <br />
      <div>
        <NewsCards />
      </div>
    </>
  );
};

export default News;
