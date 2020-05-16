import {combineReducers} from 'redux'
import coinsReducer from './coinsReducer';


export default combineReducers({
    crypto:coinsReducer,
   
})
