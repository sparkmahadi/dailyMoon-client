import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import articlesReducer from './reducers/articlesReducer';

export const store = createStore(articlesReducer, composeWithDevTools(applyMiddleware(thunk)));