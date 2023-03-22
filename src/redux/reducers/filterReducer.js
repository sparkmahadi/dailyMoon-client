import { SORT_BY } from "../actionTypes/actionTypes";
import { FILTER_BY_TAGS } from './../actionTypes/actionTypes';

const initialState = {
    tags: [],
    sortBy: ''
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY:
            return {
                ...state, sortBy: action.payload
            }

        case FILTER_BY_TAGS:
            if(!state.tags.includes(action.payload)){
                return {
                    ...state, tags: [...state.tags, action.payload]
            }
            }
            else{
                return{
                    ...state, tags: state.tags.filter(tag => tag !== action.payload)
                }
            }

        default:
            return state;
    }
}

export default filterReducer;