import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import AppointmentFrom from '../AppointmentFrom/AppointmentFrom'
// aos 
import AOS from 'aos';
import 'aos/dist/aos.css';


const AppointmentBooking = ({ booking, date }) => {
    const { name, time, space, price } = booking;
    const [lgShow, setLgShow] = useState(false);

    // aos 
    useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 500,
            duration: 1000,
            easing: 'ease',
        });
    }, [])

    return (
        <div className="col-md-4 g-4">
            <Card className=" rounded-3 shadow-lg m-auto" style={{ width: '20rem' }}
             data-aos="flip-left"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"
            >
                <Card.Body className="text-center">
                    <Card.Title className="text-primary">{name}</Card.Title>
                    <Card.Subtitle className="mt-1 custom-dark">{time}</Card.Subtitle>
                    <Card.Subtitle className="mt-1 custom-dark">price: ${price}</Card.Subtitle>
                    <Card.Text className="text-muted mt-1 fs-6">
                        {space} Spaces Available
                    </Card.Text>
                    <Button onClick={() => setLgShow(true)} className=" btn-main border-0 rounded-3 mt-1">Book Appointment </Button>
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