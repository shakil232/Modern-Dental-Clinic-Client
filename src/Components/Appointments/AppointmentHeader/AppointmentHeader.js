import React from 'react';
import Calendar from 'react-calendar';
import './AppointmentHeader.css'
import 'react-calendar/dist/Calendar.css'

const AppointmentHeader = ({handelDateChange}) => {
    

    return (
        <section className="appointment-bg">
            <main className="container mt-5">
                <div style={{ height: '600px' }} className="d-flex align-content-center row g-4">
                    <div className="col-md-4 offset-md-1 m-auto">
                        <h2 className="custom-primary "> Appointment </h2>

                        <div className="mt-4">
                            <Calendar className="border-0 shadow-lg " 
                            onChange={handelDateChange} 
                            value={new Date()} />
                        </div>
                    </div>

                    <div className="col-md-6 ">
                        <img className="img-fluid" src="https://i.ibb.co/KycqjGj/chair.png" alt="chair" />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default AppointmentHeader;