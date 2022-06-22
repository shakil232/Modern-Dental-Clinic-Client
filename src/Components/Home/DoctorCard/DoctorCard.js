import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
// aos 
import AOS from 'aos';
import 'aos/dist/aos.css';



const DoctorCard = ({ doctor }) => {
    const { image, name, phone } = doctor;
    // aos
    useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 500,
            duration: 1000,
            easing: 'ease',
        });
    }, []);


    return (
        <div className="col-md-4  g-5">
            <Card className="border-0 m-auto" style={{ width: '16rem' }}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                <div className="text-center">
                    <Card.Img variant="top" src={image} className="img-fluid w-50" />
                </div>
                <Card.Body className="text-center">
                    <Card.Subtitle className="mt-3 text-muted">{name}</Card.Subtitle>
                    <div className="d-flex justify-content-center align-content-center mt-2">
                        <div>
                            <FontAwesomeIcon style={{ color: "#1CC7C1" }} icon={faPhone} />
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