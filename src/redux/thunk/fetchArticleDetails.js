import { loadArticleDetails, updateLoadingState } from './../actions/articlesAction';

const fetchArticleDetails = (id) =>{
    return async(dispatch, getState) =>{
        dispatch(updateLoadingState(true));
        const res = await fetch(`http://localhost:5000/articles/${id}`);
        const data = await res.json();

        console.log(data);

        if (data) {
            dispatch(loadArticleDetails(data));
            dispatch(updateLoadingState(false));

        }
    }
}

export default fetchArticleDetails;