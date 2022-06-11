import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {
    
    const location = useLocation();
    const { user } = useAuth()

    return (

        user?.email ?
            <Outlet />
            :
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />


    );
};

export default PrivateRoute;