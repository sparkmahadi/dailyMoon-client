import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import loadArticlesData from './../redux/thunk/fetchArticles';
import Spinner from './Spinner';
import deleteArticle from './../redux/thunk/deleteArticle';

const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.articles);
    const loading = useSelector(state => state.loadingArticles);

    useEffect(() => {
        dispatch(loadArticlesData());
    }, [dispatch]);

    console.log(loading);

    const removeArticle = blog => {
        const confirmation = window.confirm("Are you sure to delete the news?")

        if (confirmation) {
            dispatch(deleteArticle(blog))
        }
    }

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                {
                    blogs.map(blog =>
                        <div key={blog._id} className="overflow-hidden transition-shadow duration-300 bg-white rounded border relative">
                            <Link to={`/articles/${blog._id}`} href="/" aria-label="Article">
                                <img
                                    src={blog.urlToImage}
                                    className="object-cover w-full h-64 rounded"
                                    alt=""
                                />
                            </Link>
                            <div className="p-5">
                                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                    {blog.postedDate}
                                </p>
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-5">{blog.title.slice(0, 25)}...</p>
                                </a>
                                <p className="mb-4 text-gray-700">
                                    {blog.description.length > 100 ? blog.description.slice(0,130)+'...' : blog.description}...
                                </p>
                                <div className=" space-x-4">
                                    <div className="pb-5">
                                        <div className='flex items-center gap-3'>
                                            <p className="font-semibold">
                                                Author :
                                            </p>
                                            <p className=""
                                            >
                                                {blog.author.length > 10 ? blog.author.slice(0,20)+'...' : blog.author}
                                            </p>

                                        </div>

                                        <div className='flex items-center gap-3 mb-5'>
                                            <p className='font-semibold'>Tags:</p>
                                            <p>{blog.tags.slice(0,35)}</p>
                                        </div>

                                        <div className='flex justify-center items-center gap-5 absolute bottom-5 right-5 left-5'>
                                            <Link to={`update/${blog._id}`}><button className="btn bg-gray-400 py-1 px-5 rounded-lg text-white font-semibold">Update</button></Link>
                                            <button onClick={() => removeArticle(blog)} className="btn bg-red-400 py-1 px-5 rounded-lg text-white font-semibold">Delete</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Blogs;