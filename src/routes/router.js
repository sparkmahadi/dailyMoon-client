import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Navbar/Blogs";
import Main from "../layouts/Main";
import BlogDetails from './../components/Navbar/BlogDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/articles',
                element: <Blogs></Blogs>
            },
            {
                path:'/articles/:id',
                element: <BlogDetails></BlogDetails>
            },
        ]
    }
])

export default router;