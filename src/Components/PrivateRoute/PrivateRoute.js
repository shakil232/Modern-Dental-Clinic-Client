import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import FadeLoader from "react-spinners/FadeLoader";


const PrivateRoute = () => {
    const location = useLocation();
    const { user, isLoading } = useAuth()

    return (

        isLoading ?
            <div className="d-flex align-content-center justify-content-center p-5">
                <FadeLoader color={"#36D7B7"} loading={isLoading}
                    width={8}
                    height={18}
                    radius={10}
                    margin={10}
                />
            </div>
            :
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