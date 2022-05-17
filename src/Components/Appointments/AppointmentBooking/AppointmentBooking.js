import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import AppointmentFrom from '../AppointmentFrom/AppointmentFrom'

const AppointmentBooking = ({ booking, date }) => {
    const { name, time, space, price } = booking;
    const [lgShow, setLgShow] = useState(false);

    return (
        <div className="col-md-4 g-4">
            <Card className=" rounded-3 shadow-lg m-auto" style={{ width: '20rem' }}>
                <Card.Body className="text-center">
                    <Card.Title className=" custom-primary">{name}</Card.Title>
                    <Card.Subtitle className="mt-1 custom-dark">{time}</Card.Subtitle>
                    <Card.Subtitle className="mt-1 custom-dark">price: ${price}</Card.Subtitle>
                    <Card.Text className="text-muted mt-1 fs-6">
                        {space} Spaces Available
                    </Card.Text>
                    <button onClick={()=> setLgShow(true)} className="btn btn-info border-0 rounded-3 mt-1">Book Appointment </button>
                </Card.Body>
            </Card>

            <AppointmentFrom
                   lgShow={lgShow}
                   setLgShow={setLgShow}
                    booking={booking}
                    date={date}
                ></AppointmentFrom>
        </div>
    );
};

export default AppointmentBooking;