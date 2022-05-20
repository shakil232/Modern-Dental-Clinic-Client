import { Button, Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import './DashBoard.css';
import { Link, Route, Routes } from 'react-router-dom';
// components 
import AllAppointments from '../AllAppointments/AllAppointments';
import ManageAppointment from '../ManageAppointment/ManageAppointment';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark, faList } from '@fortawesome/free-solid-svg-icons';

const DashBoard = () => {
    const [show, setShow] = useState(true);
    const margin = {
        marginLeft: '230px',
        transition: "0.6s"
    };
    const width = {
        marginLeft: '0px',
        width: '100%',
        transition: "1s"
    }

    return (
        <section>
            <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header >
                    <Link className="text-decoration-none custom-primary" to="/home"><Offcanvas.Title>Modern Dental</Offcanvas.Title></Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-unstyled">

                        <li className="">
                            <Link className="text-decoration-none custom-dark" to="appointments" >Appointments</Link>
                        </li>
                        <li className="mt-3">
                            <Link className="text-decoration-none custom-dark" to="manage" >Manage</Link>
                        </li>
                        <li className="mt-3">
                            <Link className="text-decoration-none custom-dark" to="addService" >AddService</Link>
                        </li>
                        <li className="mt-3">
                            <Link className="text-decoration-none custom-dark" to="makeAdmin" >MakeAdmin</Link>
                        </li>

                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            <div
                style={show ? { marginLeft: margin.marginLeft, transition: margin.transition } : { marginLeft: width.marginLeft, width: width.width, transition: width.transition }} >

                <div className="container mt-1">
                    {
                        show ?
                            <Button
                                className="text-danger fs-4"
                                variant="bg-transparent" onClick={() => setShow(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </Button>

                            :
                            <Button
                                className="text-info fs-4"
                                variant="bg-transparent" onClick={() => setShow(true)}>
                                <FontAwesomeIcon icon={faList} />
                            </Button>

                    }
                </div>
                <div className="mt-3">
                    <Routes>

                        <Route path="/" element={<AllAppointments />} />
                        <Route path="appointments" element={<AllAppointments />} />
                        <Route path="manage" element={<ManageAppointment />} />
                        <Route path="addService" element={<AddService />} />
                        <Route path="makeAdmin" element={<MakeAdmin />} />

                    </Routes>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;