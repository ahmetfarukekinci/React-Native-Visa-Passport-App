import {combineReducers} from 'redux'; 
import visaReducers from './visaReducers'; 

export default combineReducers({
    visa: visaReducers
})