import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: 'topics', element: <Topics /> },
            { path: 'statistics', element: <Statistics /> },
            { path: 'blog', element: <Blog /> },
            {
                path: '/topics/topic/:topicId',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
                element: <Quiz></Quiz>
            }
        ]
    },

])
export default router