import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs";
import Main from "../layouts/Main";
import BlogDetails from './../components/BlogDetails';
import AddArticle from './../components/AddArticle';
import UpdateArticle from './../components/UpdateArticle';

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
            {
                path: '/articles/update/:id',
                element: <UpdateArticle></UpdateArticle>
            }
        ]
    }
])

export default router;