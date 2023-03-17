import { GET_CONTENT, GET_CONTENT_DETAILS, UPDATE_CONTENT } from "../actionTypes/actionTypes"
import { ADD_CONTENT, DELETE_CONTENT, LOADING_CONTENT } from './../actionTypes/actionTypes';

export const loadArticles = (data) =>{
    return{
        type: GET_CONTENT,
        payload: data
    }
};

export const loadArticleDetails = (data) =>{
    return{
        type: GET_CONTENT_DETAILS,
        payload: data
    }
};

export const addArticles = (data) =>{
    return{
        type: ADD_CONTENT,
        payload: data
    }
};

export const deleteArticles = (data) =>{
    return{
        type: DELETE_CONTENT,
        payload: data
    }
};

export const updateArticles = (data) =>{
    return{
        type: UPDATE_CONTENT,
        payload: data
    }
};

export const updateLoadingState = (data) =>{
    return{
        type: LOADING_CONTENT,
        payload: data
    }
};