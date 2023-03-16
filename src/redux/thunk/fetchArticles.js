import { loadArticles, updateLoadingState } from './../actions/articlesAction';

const loadArticlesData = () => {
    return async (dispatch, getState) => {
        dispatch(updateLoadingState(true));
        const res = await fetch("https://daily-planet-server.vercel.app/articles");
        const data = await res.json();

        console.log(data);

        if (data.length) {
            dispatch(loadArticles(data));
            dispatch(updateLoadingState(false));

        }
    }
}

export default loadArticlesData;