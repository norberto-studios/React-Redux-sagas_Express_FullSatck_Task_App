import { combineReducers } from 'redux';
import createReducer from './reducer';


const rootReducer  = combineReducers({
    create: createReducer,
})

export default rootReducer;