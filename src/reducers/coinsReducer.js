import {  FETCH_CRYPTO,FETCH_ALLCRYPTO,FETCH_FORUM} from '../actions/types';

const initialState = {
  topTenCrypto:[],
  allCrypto:[],
  forum:[]
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
       default:
      return state;
  }
}
