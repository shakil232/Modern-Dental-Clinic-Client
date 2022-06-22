import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Unautho from '../../../images/unauthorization.jpg'
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'


const Unauthorized = () => {
    return (
        <Container >
            <div className="h-50" >
                <img className="img-fluid rounded-3 h-50" src={Unautho} alt="Unautho" />
            </div>
            <div className='text-center custom-dark mt-4'>
                <h2>
                    Only Admin Access . Thank You..
                </h2>
            </div>
            <div className="text-center ">
                <Link to="/home" className="p-3 btn btn-main rounded-3 border-0 mt-4">
                    <FontAwesomeIcon className="me-1" icon={faLeftLong} />   Back to Home
                </Link>
            </div>
        </Container>
    );
};

export default Unauthorized;