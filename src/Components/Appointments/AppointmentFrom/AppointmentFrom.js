import React, { useState } from 'react';
import './AppointmentFrom.css'
import { useForm } from "react-hook-form";
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import swal from 'sweetalert';



const AppointmentFrom = ({ service, date, lgShow, setLgShow }) => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();

    // appointment-booking -submit
    const onSubmit = data => {
        const patientInfo = {
            'serviceName': service.servicesName,
            'PatientName': data.name,
            'PatientEmail': data.email,
            'PatientPhone': data.phone,
            'serviceCost': service.servicesCost,
            'serviceDate': date.toLocaleDateString(),
            'serviceTime': service.servicesTime,
            'status': 'Pending'
        }

        // BOOKED-Appointment-database-post-api 
        const url = `http://localhost:5000/addAppointments`
        axios.post(url, patientInfo)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Successfully Booked!", "Your Appointment has been successfully Booked", "success");
                    setLgShow(false)
                }

            })
            .catch(err => swal("Failed!", err.message, "error") )

    };
    

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="custom-primary">
                        {service.servicesName}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel controlId="floatingInput" label="Time" >
                            <Form.Control name="time" defaultValue={service.servicesTime}  {...register("time")} disabled />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Name" >
                            <Form.Control className=" mt-2" type="text" name="name" defaultValue={user.displayName} {...register("name")} required />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Email" >
                            <Form.Control className=" mt-2" type="email" name="email" defaultValue={user.email}  {...register("email")} required />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Phone Number" >
                            <Form.Control className=" mt-2" type="text" name="phone" placeholder="Phone Number"  {...register("phone")} required />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Cost" >
                            <Form.Control className="mt-2" type="text" name="cost" defaultValue={`${service.servicesCost} $`} {...register("cost")} disabled />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Date" >
                            <Form.Control className="mt-2" name="date" defaultValue={date.toLocaleDateString()} {...register("date")} disabled />
                        </FloatingLabel>

                        <Button type="submit" className="mt-4 btn-main border-0 rounded-3" >Submit</Button>

                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default AppointmentFrom;