import { ADD_CONTENT, GET_CONTENT, LOADING_CONTENT, DELETE_CONTENT, GET_CONTENT_DETAILS, ADD_TO_HISTORY, REMOVE_FROM_HISTORY } from './../actionTypes/actionTypes';
import { format } from 'date-fns';
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

        case ADD_TO_HISTORY:
            const currentTime = format(new Date(), "PPpp");
            const existing = state.readingHistories.find(article => article._id === action.payload._id);
            console.log('existing',existing);
            if(!existing){
                console.log('inside condition');
                action.payload.readAt = currentTime;
                return{
                    ...state, readingHistories: [...state.readingHistories, action.payload]
                }
            }
            else{
                existing.readAt= currentTime;
                return{
                    ...state, readingHistories: [...state.readingHistories.filter(article => article._id !== action.payload._id), existing]
                }
            }

        case REMOVE_FROM_HISTORY:
            return{
                ...state, readingHistories: state.readingHistories.filter(article => article._id !== action.payload._id)
            }

        default:
            return state

    }
}

export default articlesReducer;