import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import loadArticlesData from './../redux/thunk/fetchArticles';
import Spinner from './Spinner';
import deleteArticle from './../redux/thunk/deleteArticle';
import { format } from 'date-fns';
import { sortingBlogs } from '../redux/actions/articlesAction';
import { filteringBlogs, addToReadingHistory } from './../redux/actions/articlesAction';

const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.article.articles);
    const loading = useSelector(state => state.article.loadingArticles);
    const sortBy = useSelector(state => state.filter.sortBy);
    const tags = useSelector(state => state.filter.tags);
    // console.log(tags);
    const filters = ['international', 'us', 'travelling', 'business', 'investment', 'economy', 'bbc', 'weather', 'stock-exchange']

    useEffect(() => {
        dispatch(loadArticlesData());
    }, [dispatch]);

    // console.log(loading);

    const removeArticle = blog => {
        const confirmation = window.confirm("Are you sure to delete the news?")

        if (confirmation) {
            dispatch(deleteArticle(blog))
        }
    }

    let content = blogs;
    console.log(sortBy);
    if (sortBy === "firstUpload") {
        content = blogs.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
    }

    if (sortBy === "lastUpload" || !sortBy) {
        content = blogs.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    }

    if (tags.length) {
        content = blogs.filter(blog => tags.every(tag => blog.tags.includes(tag)));
        console.log(content);
    }

    if (loading) {
        return <Spinner></Spinner>
    }

    const activeClass = "text-white bg-indigo-500 border-white";

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className='xl:flex items-center justify-between'>
                <div className='flex items-center justify-center xl:justify-end gap-5 pb-5'>
                    <h5 className='font-semibold uppercase'>Sort By :</h5>
                    <select defaultValue={"lastUpload"} onChange={(event) => dispatch(sortingBlogs(event.target.value))} className='rounded-lg py-1' name="sortContent" id="sortContent">
                        <option value="lastUpload">Last upload</option>
                        <option value="firstUpload">First upload</option>
                    </select>
                </div>

                <div className='flex flex-col xl:flex-row items-center lg:justify-end gap-5 pb-5'>
                    <h5 className='font-semibold uppercase'>Filters:</h5>
                    <div className='flex items-center justify-center flex-wrap gap-2'>
                        {
                            filters.map(filter =>
                                <p onClick={() => dispatch(filteringBlogs(filter))} key={filter} className={`px-2 py-0.5 cursor-pointer rounded-lg border ${tags.includes(filter) ? activeClass : null}`}>{filter}</p>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                {
                    content.map(blog =>
                        <div key={blog._id} className="overflow-hidden transition-shadow duration-300 bg-white rounded border relative">
                            <Link onClick={()=>dispatch(addToReadingHistory(blog))} to={`/articles/${blog._id}`} aria-label="Article">
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
                                <Link
                                    to={`/articles/${blog._id}`}
                                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-5">{blog.title.slice(0, 25)}...</p>
                                </Link>
                                <Link to={`/articles/${blog._id}`}>
                                    <p className="mb-4 text-gray-700">
                                        {blog.description.length > 100 ? blog.description.slice(0, 130) + '...' : blog.description}...
                                    </p>
                                </Link>
                                <div className=" space-x-4">
                                    <div className="pb-5">
                                        <div className='flex items-center gap-3'>
                                            <p className="font-semibold">
                                                Author :
                                            </p>
                                            <p className=""
                                            >
                                                {blog.author.length > 10 ? blog.author.slice(0, 20) + '...' : blog.author}
                                            </p>

                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <p className='font-semibold'>Published:</p>
                                            <p>{format(new Date(blog.publishedAt), "Pp")}</p>
                                        </div>


                                        <div className='flex gap-3 mb-7'>
                                            <p className='font-semibold'>Tags:</p>
                                            <div className='flex items-center flex-wrap gap-2'>
                                                {
                                                    blog.tags.split(', ').map((tag, i) =>
                                                        <p onClick={() => dispatch(filteringBlogs(tag))} key={i} className='px-2 py-0.5 cursor-pointer rounded-lg border text-sm'>{tag}</p>
                                                    )
                                                }
                                            </div>
                                        </div>



                                        <div className='flex justify-center items-center gap-5 absolute bottom-5 right-5 left-5'>
                                            <Link to={`articles/update/${blog._id}`}><button className="btn bg-gray-400 py-1 px-5 rounded-lg text-white font-semibold">Update</button></Link>
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