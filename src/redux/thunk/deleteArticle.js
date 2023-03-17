
import { deleteArticles } from './../actions/articlesAction';
const deleteArticle = (article) =>{
    return async(dispatch, getState) =>{
        const res = await fetch(`http://localhost:5000/articles/${article._id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        console.log(data);
        if(data.acknowledged){
            dispatch(deleteArticles(article))
        }
    }
}

export default deleteArticle;