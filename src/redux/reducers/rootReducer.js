import { combineReducers } from "redux";
import articlesReducer from './articlesReducer';
import filterReducer from './filterReducer';

export const rootReducer = combineReducers(
    {
        article: articlesReducer,
        filter: filterReducer
    }
);