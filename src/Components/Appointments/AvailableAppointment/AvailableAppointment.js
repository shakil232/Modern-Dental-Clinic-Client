import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppointmentBooking from '../AppointmentBooking/AppointmentBooking';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import { Container } from 'react-bootstrap';
import SyncLoader from "react-spinners/SyncLoader";

const AvailableAppointment = ({ date }) => {
    const [allService, setAllService] = useState([]);
    // auth 
    const { isLoading } = useAuth();

    // // loadServiceData 
    useEffect(() => {
        const url = `http://localhost:5000/allServices`
        axios.get(url)
            .then(res => setAllService(res.data))
            .catch(err => swal("Failed!", err.message, "error"))
    }, []);



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
            <Container className="mt-5">
                <div className="text-center ">
                    <h3 className="custom-primary mt-5">Available Appointment on, {date.toDateString()} </h3>
                </div>
                <main className="mt-2 d-flex align-content-center justify-content-center ">
                    <div className=" row ">
                        {
                            allService.map(service =>
                                <AppointmentBooking
                                    service={service}
                                    date={date}
                                    key={service._id}
                                />
                            )
                        }
                    </div>
                </main>
            </Container>
    );
};

export default AvailableAppointment;