import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs";
import Main from "../layouts/Main";
import BlogDetails from './../components/BlogDetails';
import AddArticle from './../components/AddArticle';
import UpdateArticle from './../components/UpdateArticle';
import ReadingHistory from "../components/ReadingHistory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
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
            },
            {
                path: 'reading-history',
                element: <ReadingHistory></ReadingHistory>
            },
        ]
    }
])

export default router;