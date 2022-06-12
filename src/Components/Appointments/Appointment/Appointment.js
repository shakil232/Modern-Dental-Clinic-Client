import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import NavBar from '../../Shared/NavBar/NabBar'
import Footer from '../../Shared/Footer/Footer'
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import useAuth from '../../../hooks/useAuth';
import SyncLoader from "react-spinners/SyncLoader";

const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date())

    const handelDateChange = date => {
        setSelectDate(date)
    }
     
    // auth 
    const { isLoading } = useAuth()

    return (
        isLoading ?
            <div className="d-flex align-content-center justify-content-center p-5">
                <SyncLoader color={"#36D7B7"} loading={isLoading}
                    width={8}
                    height={18}
                    radius={10}
                    margin={10}
                />
            </div>
            :
            <div>
                <NavBar />
                <AppointmentHeader handelDateChange={handelDateChange} />
                <AvailableAppointment date={selectDate} />
                <Footer />
            </div>

    );
};

export default Appointment;