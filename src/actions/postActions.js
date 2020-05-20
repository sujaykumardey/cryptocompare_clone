import {FETCH_USER,POST_COIN,DELETE_COIN,DELETE_USER} from './types';
import {registrationUser,loginUser,addCoin,deleteCoin} from '../assets/credentials';

export const userResistration = (data) => (dispatch) => {
  registrationUser(data).then((user) => {  
    dispatch({
      type: FETCH_USER,
      payload: user,
    });
  });
};

export const userLogin= (data) => (dispatch) => {
  loginUser(data).then((user) => {  
    dispatch({
      type: FETCH_USER,
      payload: user,
    });
  });
};


export const addCoinWallet= (data,token) => (dispatch) => {
  console.log(data,token);
  addCoin(data,token).then((coin) => {  
    dispatch({      
      type: POST_COIN,
      payload: coin,
    });
  });
};

export const onDeleteCoin= (id,token) => (dispatch) => {
    deleteCoin(id,token).then((coin) => {  
      dispatch({      
      type: DELETE_COIN,
      payload: coin,
    });
  });
};

export const Logout= () => (dispatch) => {
  dispatch({      
    type: DELETE_USER,
    payload: [],
  });
};