import React from 'react';
import './AppointmentHeader.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Chair from '../../../images/chair.png'

const AppointmentHeader = ({handelDateChange}) => {
    

    return (
        <section className="appointment-bg">
            <main className="container ">
                <div style={{ height: '600px' }} className="d-flex align-content-center row g-4">
                    <div className="col-md-4 offset-md-1 m-auto">
                        <h2 className="custom-dark "> Appointment </h2>

                        <div className="mt-4">
                            <Calendar className="border-0 shadow-lg " 
                            onChange={handelDateChange} 
                            value={new Date()} />
                        </div>
                    </div>

                    <div className="col-md-6 ">
                        <img className="img-fluid" src={Chair} alt="chair" />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default AppointmentHeader;