import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Navbar/Blogs";
import Main from "../layouts/Main";
import BlogDetails from './../components/Navbar/BlogDetails';
import AddArticle from './../components/Navbar/AddArticle';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/articles',
                element: <Blogs></Blogs>
            },
            {
                path: '/articles/:id',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/articles/add',
                element: <AddArticle></AddArticle>
            },
        ]
    }
])

export default router;