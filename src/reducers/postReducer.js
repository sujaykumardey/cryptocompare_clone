import {FETCH_USER, POST_COIN, DELETE_COIN,DELETE_USER } from '../actions/types';

const initialState = {
 users:[],

};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case POST_COIN:
       state.users.coins=action.payload
        return {
          ...state,          
        };
    case DELETE_COIN:
      state.users.coins=action.payload
          return {
           ...state,          
           };
    case DELETE_USER:  
    return {
      ...state,
      users:action.payload          
      };
                 
                           
                
    
    default:
      return state;
  }
}
