import React from 'react';
import './MakeAppointment.css';
import Doctor from '../../../images/doctor.png'
import { Button } from 'react-bootstrap';



const MakeAppointment = () => {
    return (
        <section className='home-bg'>
            <main style={{ marginTop: "150px" }} className="container ">
                <div className="row g-3">
                    <div className="col-md-4  offset-md-1">
                        <img style={{ marginTop: "-90px" }} className="img-fluid" src={Doctor} alt="aboutUs" />
                    </div>
                    <div className="col-md-6 m-auto">
                        <h6 style={{ fontWeight: "500" }} className="custom-primary mt-3">Appointment</h6>
                        <h2 className="text-white"> Make an appointment
                            <br />
                            Today
                        </h2>
                        <p className="mt-2 text-white text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem explicabo amet enim architecto debitis sapiente ad molestiae iusto. Consequatur, libero.
                        </p>

                        <Button className="btn-main border-0 rounded-3 mb-2">Learn More</Button>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default MakeAppointment;