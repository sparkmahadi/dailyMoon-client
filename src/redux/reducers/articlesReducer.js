
import { ADD_CONTENT, GET_CONTENT, LOADING_CONTENT, DELETE_CONTENT, GET_CONTENT_DETAILS } from './../actionTypes/actionTypes';
const initialState = {
    articles: [],
    articleDetails: {},
    readingHistories: [],
    userRole: '',
    loadingArticles: false,
}

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CONTENT:
            return {
                ...state, articles: action.payload
            };

        case GET_CONTENT_DETAILS:
            return {
                ...state, articleDetails: action.payload
            };

        case LOADING_CONTENT:
            return {
                ...state, loadingArticles: action.payload
            }

        case ADD_CONTENT:
            return {
                ...state, articles: [...state.articles, action.payload]
            }

        case DELETE_CONTENT:
            return {
                ...state, articles: state.articles.filter(article => article._id !== action.payload._id)
            }

        default:
            return state

    }
}

export default articlesReducer;