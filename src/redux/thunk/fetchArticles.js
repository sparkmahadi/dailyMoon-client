import { loadArticles, updateLoadingState } from './../actions/articlesAction';

const loadArticlesData = () => {
    return async (dispatch, getState) => {
        dispatch(updateLoadingState(true));
        const res = await fetch("http://localhost:5000/articles");
        const data = await res.json();

        console.log(data);

        if (data.length) {
            dispatch(loadArticles(data));
            dispatch(updateLoadingState(false));

        }
    }
}

export default loadArticlesData;