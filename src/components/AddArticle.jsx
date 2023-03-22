import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import addArticle from './../redux/thunk/addArticle';

const AddArticle = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        const article = {
            author: data.author,
            content: data.content,
            title: data.title,
            urlToImage: data.urlToImage,
            description: data.description
        };

        console.log(article);

        dispatch(addArticle(article));
    };

    return (
        <div className='flex justify-center items-center h-full xl:py-20'>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='author'>
                        Author
                    </label>
                    <input type='text' id='author' {...register("author")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input type='text' id='title' {...register("title")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='content'>
                        Content
                    </label>
                    <textarea className="h-32" type='text' id='content' {...register("content")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='urlToImage'>
                        ImageURL
                    </label>
                    <input type='text' id='urlToImage' {...register("urlToImage")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='description'>
                        Description
                    </label>
                    <input type='text' id='description' {...register("description")} />
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

export default AddArticle;
