import {
  FETCH_USER,
  POST_COIN,
  DELETE_COIN,
  DELETE_USER,
  UPDATE_COIN_PRICE,
} from '../actions/types';

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case POST_COIN:
      state.users.coins = action.payload;
      return {
        ...state,
      };
    case DELETE_COIN:
      const result=state.users.coins.filter(e=>action.payload!==e._id)
      state.users.coins=result
      return {
        ...state
      };

    case UPDATE_COIN_PRICE:
      return {
        ...state,
        cryptoprice: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
