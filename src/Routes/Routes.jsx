import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
// import JobCard from "../Component/JobCard";
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import MyBids from "../Pages/MyBids";
import BidRequests from "../Pages/BidRequests";
import UpdateJob from "../Pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
                // loader: ({params}) => fetch(`http://localhost:8000/job/${params.id}`)
                
                
            },
            {
                path: '/add-job',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/my-jobs',
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: '/my-bids',
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path: '/bid-req',
                element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <UpdateJob></UpdateJob>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
                
                
            },
        ]
    }
])

export default router;