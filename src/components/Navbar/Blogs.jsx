import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    // const blogs = [
    //     {
    //         img: "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    //         postedDate: '13 Jul 2020',
    //         title: "Diving to the deep",
    //         description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    //         likes: 74,
    //         comments: 20
    //     },
    //     {
    //         img: "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
    //         postedDate: '13 Jul 2020',
    //         title: "Diving to the deep",
    //         description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    //         likes: 74,
    //         comments: 20
    //     },
    //     {
    //         img: "https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    //         postedDate: '13 Jul 2020',
    //         title: "Diving to the deep",
    //         description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    //         likes: 74,
    //         comments: 20
    //     },
    // ]

    useEffect(() => {
        fetch("http://localhost:5000/articles")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    console.log(blogs);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                {
                    blogs.map(blog =>
                        <div key={blog._id} className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <Link to={`/articles/${blog._id}`} href="/" aria-label="Article">
                                <img
                                    src={blog.urlToImage}
                                    className="object-cover w-full h-64 rounded"
                                    alt=""
                                />
                            </Link>
                            <div className="py-5">
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
                                    {blog.description.slice(0,140)}...
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
                                                {blog.author}
                                            </a>
                                            <p className="text-sm font-medium leading-4 text-gray-600">
                                                Author
                                            </p>
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