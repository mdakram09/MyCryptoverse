import React from 'react';
import CryptocurrencyPageSearchBar from './CryptocurrencyPageSearchBar';
import CryptocurrencyCards from './Cards/CryptocurrencyCards';

const Cryptocurrency = () => {
  return (
    <>
      <div className="search-crypto">
        <CryptocurrencyPageSearchBar />
      </div>
      <div>
        <CryptocurrencyCards />
      </div>
    </>
  );
};

export default Cryptocurrency;
