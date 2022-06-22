import React from 'react';
import { Link } from 'react-router-dom';
// image 
import Chair from '../../../../images/chair.png'


const HeaderMain = () => {
    return (
        <main className="container ">
            <div style={{ height: '500px' }} className="d-flex align-content-center row g-4">
                <div className="col-md-4 offset-md-1 m-auto mt-5">
                    <h2 className="custom-dark "> Your New Smile
                        <br />
                        Starts Here
                    </h2>
                    <p className="mt-2 text-muted text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam qui blanditiis illo, autem velit sequi!
                    </p>

                    <Link to="/appointment" className="btn btn-main border-0 rounded-3 mb-2">Get Appointment </Link>
                </div>
                <div className="col-md-6 ">
                    <img className="img-fluid" src={Chair} alt="chair" />

                </div>
            </div>
        </main>
    );
};

export default HeaderMain;