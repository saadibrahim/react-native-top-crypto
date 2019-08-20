import { create } from 'apisauce';

const api = create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1/',
  headers: {
    'X-CMC_PRO_API_KEY': '...',
  },
});

export default api;
