import React from 'react';
import { Card } from 'react-bootstrap';


const ServicesCard = ({ service }) => {
    const { name, image, description } = service;
    return (
        <div className="col-md-4  g-5">
            <Card className="border-0 m-auto" style={{ width: '16rem' }}>
                <div className="text-center">
                <Card.Img variant="top" src={image} className="img-fluid w-25" />
                </div>
                <Card.Body className="text-center">
                    <Card.Subtitle className="mt-2 text-muted">{name}</Card.Subtitle>
                    <Card.Text className="text-muted">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServicesCard;