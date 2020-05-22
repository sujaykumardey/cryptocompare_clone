import {combineReducers} from 'redux'
import coinsReducer from './coinsReducer';
import postReducer from './postReducer';


export default combineReducers({
    cryptos:coinsReducer,
    crypto:postReducer
})
