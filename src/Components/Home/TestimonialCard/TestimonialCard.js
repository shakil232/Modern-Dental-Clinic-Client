import React from 'react';
import { Card } from 'react-bootstrap';



const TestimonialCard = ({ testimonial }) => {
    const { comments, name, address, image } = testimonial;

    return (
        <Card className="h-auto" style={{ width: '19rem', }}>
            <Card.Body >
                <Card.Text className="text-muted text-justify">
                    {comments}
                </Card.Text>
                <div className="d-flex justify-content-center align-content-center ">
                    <div>
                        <Card.Img variant="top" src={image} className="img-fluid w-50" />
                    </div>
                    <div>
                        <Card.Title className="custom-primary">{name}</Card.Title>
                        <Card.Subtitle className="mt-2 text-muted">{address}</Card.Subtitle>
                    </div>
                </div>

            </Card.Body>
        </Card>
    );
};

export default TestimonialCard;