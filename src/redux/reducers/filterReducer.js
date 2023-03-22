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
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default filterReducer;