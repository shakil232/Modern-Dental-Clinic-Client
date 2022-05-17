
import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialCard = ({ testimonial }) => {
    const { comments, name, address, image } = testimonial;
    return (
        <div className="col-md-4 g-4">
            <Card className=" m-auto shadow-lg" style={{ width: '19rem', height:'19rem' }}>

                <Card.Body >
                    <Card.Text className="text-muted text-justify">
                        {comments}
                    </Card.Text>
                    <Card.Footer>
                        <div className="d-flex justify-content-center align-content-center ">
                            <div>
                                <Card.Img variant="top" src={image} className="img-fluid w-50" />
                            </div>
                            <div>
                                <Card.Title className="custom-primary">{name}</Card.Title>
                                <Card.Subtitle className="mt-2 text-muted">{address}</Card.Subtitle>
                            </div>
                        </div>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TestimonialCard;