import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

const DoctorCard = ({ doctor }) => {
    const { image, name, phone } = doctor;
    return (
        <div className="col-md-4  g-5">
            <Card className="border-0 m-auto" style={{ width: '16rem' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={image} className="img-fluid w-50" />
                </div>
                <Card.Body className="text-center">
                    <Card.Subtitle className="mt-3 text-muted">{name}</Card.Subtitle>
                    <div className="d-flex justify-content-center align-content-center mt-2">
                        <div>
                            <FontAwesomeIcon style={{color:"#1CC7C1"}} icon={faPhone} />
                        </div>
                        <div className="ms-2">
                            <small>{phone}</small>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DoctorCard;