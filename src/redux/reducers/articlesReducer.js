
import { GET_CONTENT, LOADING_CONTENT } from './../actionTypes/actionTypes';
const initialState = {
    articles: [],
    readingHistories: [],
    userRole: '',
    loadingArticles: false,
}

const articlesReducer = (state = initialState, action) =>{
    switch(action.type){

        case GET_CONTENT:
            return{
                ...state, articles: action.payload
            };

            case LOADING_CONTENT:
                return{
                    ...state, loadingArticles: action.payload
                }
        
        default:
            return state

    }
}

export default articlesReducer;