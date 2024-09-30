import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Provider/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <p>Loading...</p>;

    if (user) return children;

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
