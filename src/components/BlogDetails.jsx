import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchArticleDetails from './../redux/thunk/fetchArticleDetails';
import deleteArticle from './../redux/thunk/deleteArticle';

const BlogDetails = () => {
    // const [article, setArticle] = useState({});
    const article = useSelector(state => state.article.articleDetails)
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchArticleDetails(id))
    }, [dispatch, id]);

    const removeArticle = blog => {
        const confirmation = window.confirm("Are you sure to delete the news?")

        if (confirmation) {
            dispatch(deleteArticle(blog))
        }
    }
    console.log(article);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                <div >
                    <img
                        src={article.urlToImage}
                        className="object-cover w-full rounded"
                        alt=""
                    />
                </div>
                <div className="py-5">
                    <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                        {article.postedDate}
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        <p className="text-2xl font-bold leading-5">{article.title}</p>
                    </a>
                    <p className="mb-4 text-gray-700">
                        {article.content}
                        {article.description}
                    </p>
                    <div className="flex space-x-4">
                    <div className=" space-x-4">
                                    <div className="pb-5">
                                        <div className='flex items-center gap-3'>
                                            <p className="font-semibold">
                                                Author :
                                            </p>
                                            <p className=""
                                            >
                                                {article.author}
                                            </p>

                                        </div>

                                        <div className='flex items-center gap-3 mb-5'>
                                            <p className='font-semibold'>Tags:</p>
                                            <p>{article.tags}</p>
                                        </div>

                                        <div className='flex justify-center items-center gap-5'>
                                            <Link to={`/articles/update/${article._id}`}><button className="btn bg-gray-400 py-1 px-5 rounded-lg text-white font-semibold">Update</button></Link>
                                            <button onClick={() => removeArticle(article)} className="btn bg-red-400 py-1 px-5 rounded-lg text-white font-semibold">Delete</button>
                                        </div>
                                    </div>

                                </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;