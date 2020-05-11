import {FETCH_COINS} from './types';
// import {api} from '../assets/credentials';

export const fetchPosts = () => (dispatch) => {
  fetch("https://min-api.cryptocompare.com/data/top/totaltoptiervol?extraParams=https:%2F%2Fwww.cryptocompare.com&limit=10&page=0&tsym=USD&key=39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1")
      .then(res=>res.json())
      .then(coins=>dispatch({
         type: FETCH_COINS,
         payload: coins,
    })) 
};
