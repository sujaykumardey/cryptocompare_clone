import {combineReducers} from 'redux'
import postReducer from './coinsReducer';


export default combineReducers({
    crypto:postReducer
})
