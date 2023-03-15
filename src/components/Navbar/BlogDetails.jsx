import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
    const [article, setArticle] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/articles/${id}`)
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [id]);

    console.log(article);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <Link  href="/" aria-label="Article">
                                <img
                                    src={article.urlToImage}
                                    className="object-cover w-full h-64 rounded"
                                    alt=""
                                />
                            </Link>
                            <div className="py-5">
                                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                    {article.postedDate}
                                </p>
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-5">{article.title}...</p>
                                </a>
                                <p className="mb-4 text-gray-700">
                                    {article.description}...
                                </p>
                                <div className="flex space-x-4">
                                    <div className="flex items-center">
                                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                                            <img
                                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                                alt="avatar"
                                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                                            />
                                        </a>
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Author"
                                                title="Author"
                                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                {article.author}
                                            </a>
                                            <p className="text-sm font-medium leading-4 text-gray-600">
                                                Author
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

        </div>
    );
};

export default BlogDetails;