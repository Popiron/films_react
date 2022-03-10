import { composeWithDevTools } from '@redux-devtools/extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));