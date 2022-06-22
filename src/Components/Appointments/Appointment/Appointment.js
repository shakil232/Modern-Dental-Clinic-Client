import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import NavBar from '../../Shared/NavBar/NabBar'
import Footer from '../../Shared/Footer/Footer'
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';



const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    const handelDateChange = date => {
        setSelectDate(date)
    };


    return (

        <div>
            <NavBar />
            <AppointmentHeader handelDateChange={handelDateChange} />
            <AvailableAppointment date={selectDate} />
            <Footer />
        </div>

    );
};

export default Appointment;