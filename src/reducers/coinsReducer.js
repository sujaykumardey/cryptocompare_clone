import {  FETCH_CRYPTO,FETCH_ALLCRYPTO,FETCH_FORUM,FETCH_TEN_COIN,FETCH_NEWS} from '../actions/types';

const initialState = {
  topTenCrypto:[],
  allCrypto:[],
  forum:[],
  news:[],
  tencoin:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
       case FETCH_CRYPTO:
         return{
            ...state,
            topTenCrypto:action.payload
         }
         case FETCH_ALLCRYPTO:
         return{
            ...state,
            allCrypto:action.payload
         }
         case FETCH_FORUM:
         return{
            ...state,
            forum:action.payload
         }
         case FETCH_NEWS:
         return{
            ...state,
            news:action.payload
         }
         case FETCH_TEN_COIN:
          return{
             ...state,
             tencoin:action.payload
          }
       default:
      return state;
  }
}
