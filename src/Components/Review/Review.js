import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from '../Shared/NavBar/NabBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPhone, faPaperPlane, faUserDoctor, faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';
import MoonLoader from "react-spinners/MoonLoader";
import useAuth from '../../hooks/useAuth';


const Review = () => {
    const { isLoading } = useAuth();
    
    return (

        isLoading ?
            <div className="d-flex align-content-center justify-content-center p-5">
                <MoonLoader color={"#36D7B7"} loading={isLoading}
                   size={60}
                />
            </div>
            :
            <section >
                <NavBar />
                <main className="container mt-5">
                    <h3 className="custom-primary border-bottom">Booking Appointment Review</h3>
                    <Row className="mt-5 p-4 mb-5 shadow-lg rounded-3 bg-light">
                        <Col className="mt-2 ms-2" md={4} sm={12}>
                            <h5 className=" text-primary">Patient Information</h5>
                            <div className="mt-3">
                                <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faBed} />shakil</h6>
                                <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faPhone} />01718160232</h6>
                                <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faPaperPlane} />shakil@gmail.com</h6>
                            </div>
                        </Col>

                        <Col className=" mt-2 ms-2" md={4} sm={12}>
                            <h5 className=" text-primary">Appointment Information</h5>
                            <div className="mt-3">
                                <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faUserDoctor} />shakil</h6>
                                <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faCalendarDay} />22/22/22</h6>
                                <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faClock} />7:30-9-00 pm</h6>
                            </div>
                        </Col>

                        <Col className=" mt-2 ms-2" md={3} sm={12}>
                            <h5 className=" text-primary">Status</h5>
                            <div className="mt-3">
                                <h6 style={{ width: '75px', height: '40px' }} className="bg-danger p-2 rounded-3 text-white" >pending</h6>
                            </div>
                        </Col>
                    </Row>
                </main>
            </section >

    );
};

export default Review;