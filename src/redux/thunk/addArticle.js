import { addArticles } from './../actions/articlesAction';

const addArticle = (article) =>{
    return async(dispatch, getState) =>{
        const res = await fetch(`http://localhost:5000/articles/add-article`, {
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