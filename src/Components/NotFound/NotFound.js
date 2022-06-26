import React from 'react';
import { Link } from 'react-router-dom';
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLeftLong } from '@fortawesome/free-solid-svg-icons';


const NotFound = () => {
    return (
        <section className="mt-3">
            <img className="img-fluid" src="https://i.ibb.co/pxrzZL9/error.png" alt="error" />
            <div className="text-center">
                <Link to="/home" className="p-3 btn btn-main rounded-3 border-0 mt-4">
                    <FontAwesomeIcon className="me-1" icon={faLeftLong} />   Back to Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;