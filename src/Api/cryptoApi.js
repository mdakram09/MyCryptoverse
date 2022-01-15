import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    symbols: 'BTC',
    uuids: 'Qwsogvtv82FCd',
    tiers: '1',
    tags: 'defi',
    orderBy: 'marketCap',
    search: 'Bitco',
    orderDirection: 'desc',
    limit: '50',
    offset: '0',
  },
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
