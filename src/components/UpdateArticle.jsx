import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchArticleDetails from './../redux/thunk/fetchArticleDetails';
import updateArticle from './../redux/thunk/updateArticle';

const UpdateArticle = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const {id} = useParams();
    const article = useSelector(state => state.articleDetails);
    console.log(article);

    useEffect(()=>{
        dispatch(fetchArticleDetails(id))
    },[dispatch, id])

    const submit = (data) => {
        const newArticle = {
            ...article,
            author: data.author,
            content: data.content,
            title: data.title,
            urlToImage: data.urlToImage,
            description: data.description
        };

        console.log(newArticle);

        dispatch(updateArticle(newArticle));
    };

    return (
        <div className='flex justify-center items-center h-full '>
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
                    <textarea defaultValue={article ? article.content : null} className="h-32" type='text' id='content' {...register("content")} />
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
                    <input defaultValue={article ? article.description : null} type='text' id='description' {...register("description")} />
                </div>


                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
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
