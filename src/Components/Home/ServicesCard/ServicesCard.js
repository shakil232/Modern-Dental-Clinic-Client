import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
// aos 
import AOS from 'aos';
import 'aos/dist/aos.css'



const ServicesCard = ({ service }) => {
    const { name, image, description } = service;

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
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                <div className="text-center">
                    <Card.Img variant="top" src={image} className="img-fluid w-25" />
                </div>
                <Card.Body className="text-center">
                    <Card.Subtitle className="mt-2 text-muted">{name}</Card.Subtitle>
                    <Card.Text className="text-muted">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card >
        </div >
    );
};

export default ServicesCard;