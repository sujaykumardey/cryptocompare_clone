import {  FETCH_CRYPTO } from '../actions/types';

const initialState = {
  crypto:[] 
};

export default function (state = initialState, action) {
  switch (action.type) {
       case FETCH_CRYPTO:
         return{
            ...state,
            crypto:action.payload
         }
       default:
      return state;
  }
}
