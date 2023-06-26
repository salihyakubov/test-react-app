import {createStore, combineReducers, applyMiddleware} from 'redux'
import { personsReducer } from './personsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer= combineReducers({
    persons: personsReducer,
})




export const store= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
