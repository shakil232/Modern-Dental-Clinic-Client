import React from 'react';
import AppointmentBooking from '../AppointmentBooking/AppointmentBooking';


const allBookingInfo = [
    {
        name: 'Fluoride Treatment',
        time: '8:00 am - 9:00 am',
        space: '10',
        price: '14'
    },
    {
        name: 'Cavity Filling',
        time: '7:00 pm - 8:00 pm',
        space: '10',
        price: '10',
    },
    {
        name: 'Teeth Whitening',
        time: '10:00 am - 11:30 am',
        space: '10',
        price: '15'
    },
    {
        name: 'Teeth Orthodontics',
        time: '5:00 pm - 6:30 pm',
        space: '10',
        price: '18'
    },
    {
        name: 'Cosmetic Dentistry',
        time: '11:30 pm - 12:30 pm',
        space: '10',
        price: '12'
    },
    {
        name: 'Teeth Cleaning',
        time: '7:00 pm - 8:30 pm',
        space: '10',
        price: '19'
    }
]

const AvailableAppointment = ({ date }) => {

    return (
        <section className="container mt-5">
            <div className="text-center ">
                <h3 className="custom-primary mt-5">Available Appointment on, {date.toDateString()} </h3>
            </div>
            <main className="mt-2 d-flex align-content-center justify-content-center ">
                <div className=" row ">
                    {
                        allBookingInfo.map(booking =>
                            <AppointmentBooking
                                booking={booking}
                                date={date
                                }></AppointmentBooking>
                        )
                    }
                </div>
            </main>
        </section>
    );
};

export default AvailableAppointment;