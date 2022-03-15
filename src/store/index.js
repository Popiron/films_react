import { composeWithDevTools } from '@redux-devtools/extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { detailsReducer } from './detailsReducer';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    details: detailsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));