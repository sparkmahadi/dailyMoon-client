
const updateArticle = (article) =>{
    return async(dispatch, getState) =>{
        const res = await fetch(`http://localhost:5000/articles/${article._id}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(article)
        });
        const data = await res.json();
        console.log(data);

        if(data.acknowledged){
            // dispatch(updateArticles(article))
        }
    }
}

export default updateArticle;