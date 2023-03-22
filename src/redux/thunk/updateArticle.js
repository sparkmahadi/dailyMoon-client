import { toast } from 'react-toastify';

const updateArticle = (article) =>{
    return async(dispatch, getState) =>{
        const res = await fetch(`https://daily-planet-server.vercel.app/articles/${article._id}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(article)
        });
        const data = await res.json();
        console.log(data);

        if(data.acknowledged){
            toast.success("Updated successfully")
            // dispatch(updateArticles(article))
        }
    }
}

export default updateArticle;