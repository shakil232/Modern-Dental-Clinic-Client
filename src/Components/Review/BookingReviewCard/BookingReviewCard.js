import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBed, faPhone, faEnvelope, faTooth, faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/themes/light.css'



const BookingReviewCard = ({ review, handelCancelAppointment }) => {
    const { _id, serviceName, PatientName, PatientEmail, PatientPhone, serviceDate, serviceTime, status } = review;

    return (
        <Row className="mt-4 mb-4 p-4 shadow-lg rounded-3 bg-light">
            {/* cancel-appointment  */}
            <div className="text-end mb-2">
                <Tippy
                    content="Cancel Appointment"
                    delay='200'
                    theme='material'
                    animation='scale'
                >

                    <Button className="bg-transparent border-0 btn-outline-danger">
                        <FontAwesomeIcon onClick={() => handelCancelAppointment(_id)} className="text-danger fs-4 cursor" icon={faXmark} />
                    </Button>
                </Tippy>
            </div >


            {/* booking-appointment-details  */}
            < Col className="mt-2 ms-2" md={4} sm={12} >
                <h5 className=" text-primary">Patient Information</h5>
                <div className="mt-3">
                    <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faBed} /> {PatientName} </h6>
                    <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faPhone} /> {PatientPhone} </h6>
                    <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faEnvelope} /> {PatientEmail} </h6>
                </div>
            </Col >

            <Col className=" mt-2 ms-2" md={4} sm={12}>
                <h5 className=" text-primary">Appointment Information</h5>
                <div className="mt-3">
                    <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faTooth} /> {serviceName} </h6>
                    <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faCalendarDay} /> {serviceDate} </h6>
                    <h6 className="text-muted"><FontAwesomeIcon className="me-2" style={{ color: "#1CC7C1" }} icon={faClock} /> {serviceTime} </h6>
                </div>
            </Col>

            <Col className=" mt-2 ms-2" md={3} sm={12}>
                <h5 className=" text-primary">Status</h5>
                <div className="mt-3">
                    <h6 style={{ width: '100px', height: '40px' }} className={`book-${status} p-2 rounded-3 text-white text-center`}> {status} </h6>
                </div>
            </Col>
        </Row >

    );
};

export default BookingReviewCard;