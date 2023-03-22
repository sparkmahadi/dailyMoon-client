import { addArticles } from './../actions/articlesAction';

const addArticle = (article) =>{
    return async(dispatch, getState) =>{
        const res = await fetch(`https://daily-planet-server.vercel.app/articles/add-article`, {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(article)
        });
        const data = await res.json();
        console.log(data);

        if(data.acknowledged){
            dispatch(addArticles(article))
        }
    }
}

export default addArticle;