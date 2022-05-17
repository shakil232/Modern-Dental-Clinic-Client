import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="container mt-5">
            <div className="text-center">
                <h2 style={{fontWeight:'800'}} className="custom-dark">404</h2>
                <h4 className="text-danger">Sorry!! NotFound..</h4>

                <Link to="/home" className="btn btn-info">Home</Link>
            </div>
        </section>
    );
};

export default NotFound;