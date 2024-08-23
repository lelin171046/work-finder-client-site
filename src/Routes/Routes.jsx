import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
// import JobCard from "../Component/JobCard";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                // loader: ({params}) => fetch(`http://localhost:8000/job/${params.id}`)
                
                
            }
        ]
    }
])

export default router;