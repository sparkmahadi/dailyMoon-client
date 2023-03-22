import { deleteArticles } from './../actions/articlesAction';
import { toast } from 'react-toastify';

const deleteArticle = (article) =>{
    return async(dispatch, getState) =>{
        const res = await fetch(`https://daily-planet-server.vercel.app/articles/${article._id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        console.log(data);
        if(data.acknowledged){
            dispatch(deleteArticles(article));
            toast.success("Article is deleted successfully")
        }
    }
}

export default deleteArticle;