import { SORT_BY } from "../actionTypes/actionTypes";

const initialState = {
    tags: [],
    sortBy: ''
}

const filterReducer = (state = initialState, action) =>{
    switch (action.type){
        case SORT_BY:
            return{
                ...state, sortBy: action.payload
            }
            
        default:
            return state;
    }
}

export default filterReducer;