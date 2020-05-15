import {  FETCH_CRYPTO,FETCH_ALLCRYPTO } from '../actions/types';

const initialState = {
  topTenCrypto:[],
  allCrypto:[]
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
       default:
      return state;
  }
}
