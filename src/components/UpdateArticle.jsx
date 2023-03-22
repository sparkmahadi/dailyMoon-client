import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import fetchArticleDetails from './../redux/thunk/fetchArticleDetails';
import updateArticle from './../redux/thunk/updateArticle';

const UpdateArticle = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const {id} = useParams();
    const article = useSelector(state => state.article.articleDetails);
    console.log(article);

    useEffect(()=>{
        dispatch(fetchArticleDetails(id))
    },[dispatch, id])

    const submit = (data) => {
        let newArticle = {
            ...article
        };

        if(data.author){
            newArticle.author = data.author
        }
        if(data.content){
            newArticle.content = data.content
        }
        if(data.title){
            newArticle.title = data.title
        }
        if(data.urlToImage){
            newArticle.urlToImage = data.urlToImage
        }
        if(data.description){
            newArticle.description = data.description
        }
        if(data.tags){
            newArticle.tags = data.tags
        }

        console.log(newArticle);

        dispatch(updateArticle(newArticle));
    };

    return (
        <div className='flex justify-center items-center h-full xl:py-20'>
            <ToastContainer position="top-center"/>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='author'>
                        Author
                    </label>
                    <input defaultValue={article ? article.author : null} type='text' id='author' {...register("author")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input defaultValue={article ? article.title : null} type='text' id='title' {...register("title")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='content'>
                        Content
                    </label>
                    <textarea defaultValue={article ? article.content : null} className="h-52" type='text' id='content' {...register("content")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='urlToImage'>
                        ImageURL
                    </label>
                    <input defaultValue={article ? article.urlToImage : null} type='text' id='urlToImage' {...register("urlToImage")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='description'>
                        Description
                    </label>
                    <textarea defaultValue={article ? article.description : null} className="h-32" type='text' id='description' {...register("description")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='tags'>
                        Tags
                    </label>
                    <input defaultValue={article ? article.tags : null} type='text' id='tags' {...register("tags")} />
                </div>


                <div className='flex justify-between items-center w-full'>
                    <button
                        className='btn bg-gray-400 py-1 px-5 rounded-lg text-white font-semibold'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateArticle;
