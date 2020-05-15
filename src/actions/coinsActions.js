import {FETCH_CRYPTO,FETCH_ALLCRYPTO} from './types';
// import {api} from '../assets/credentials';

export const fetchTopTenCrypto= () => (dispatch) => {
  fetch("https://min-api.cryptocompare.com/data/top/totaltoptiervol?extraParams=https:%2F%2Fwww.cryptocompare.com&limit=10&page=0&tsym=USD&key=39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1")
      .then(res=>res.json())
      .then(crypto=>dispatch({
         type: FETCH_CRYPTO,
         payload: crypto.Data,
    })) 
};
export const fetchAllCrypto= () => (dispatch) => {
  console.log("fetchAll")
  fetch("https://min-api.cryptocompare.com/data/top/totaltoptiervol?extraParams=https:%2F%2Fwww.cryptocompare.com&limit=100&page=0&tsym=USDkey=39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1")
      .then(res=>res.json())
      .then(crypto=>dispatch({
         type: FETCH_ALLCRYPTO,
         payload: crypto.Data,
    })) 
};


