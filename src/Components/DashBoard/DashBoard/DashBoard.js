import { Button, Image, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import './DashBoard.css';
import { Link, Route, Routes } from 'react-router-dom';
// components 
import AllAppointments from '../AllAppointments/AllAppointments';
import ManageAppointment from '../ManageAppointment/ManageAppointment';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import RecentAppointment from '../RecentAppointment/RecentAppointment';


// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faList,
    faHouseChimney,
    faListCheck,
    faUserPlus,
    faFileCirclePlus,
    faGear
} from '@fortawesome/free-solid-svg-icons';
import UpdateService from '../UpdateService/UpdateService';




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
        <section className="dashboard-bg pb-5 h-auto">
            <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header >
                    <Link className="text-decoration-none custom-primary" to="/">
                        <Offcanvas.Title>
                            <FontAwesomeIcon className="text-secondary" icon={faHouseChimney} /> Dental-Clinic
                        </Offcanvas.Title>
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-unstyled">

                        <li className="">
                            <Link style={{ fontWeight: '600' }} className="text-decoration-none custom-dark" to="appointments" >
                                <FontAwesomeIcon className="custom-primary me-2 " icon={faListCheck} /> DashBoard
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link style={{ fontWeight: '600' }} className="text-decoration-none custom-dark" to="recentAppointments" >
                                <FontAwesomeIcon className="custom-primary me-2 " icon={faListCheck} /> Recent Appointment
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link style={{ fontWeight: '600' }} className="text-decoration-none custom-dark" to="manageService" >
                                <FontAwesomeIcon className="custom-primary me-2 " icon={faGear} /> Manage Service
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link style={{ fontWeight: '600' }} className="text-decoration-none custom-dark" to="addService" >
                                <FontAwesomeIcon className="custom-primary me-2 " icon={faFileCirclePlus} /> Add Service
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link style={{ fontWeight: '600' }} className="text-decoration-none custom-dark" to="makeAdmin" >
                                <FontAwesomeIcon className="custom-primary me-2 " icon={faUserPlus} />  Make Admin
                            </Link>
                        </li>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link className="btn btn-info border-0 rounded-3 " to="/home" >
                            <FontAwesomeIcon className=" me-2 " icon={faHouseChimney} />  Back To Home
                        </Link>

                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            <div className="p-2"
                style={show ? { marginLeft: margin.marginLeft, transition: margin.transition } : { marginLeft: width.marginLeft, width: width.width, transition: width.transition }} >

                <Navbar collapseOnSelect bg="light" expand="lg" variant="light">
                    <Navbar.Brand >
                        {
                            show ?
                                <Button
                                    className="text-danger fs-4 ms-3"
                                    variant="bg-transparent" onClick={() => setShow(false)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>

                                :
                                <Button
                                    className="text-secondary fs-4 ms-3"
                                    variant="bg-transparent" onClick={() => setShow(true)}>
                                    <FontAwesomeIcon icon={faList} />
                                </Button>

                        }
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavDropdown
                            className='me-3'
                            title={

                                <Image
                                    width="40"
                                    height="40"
                                    roundedCircle
                                    src="https://i.ibb.co/5GzXkwq/user.png"
                                    alt="user-pp" />

                            }
                            id="collasible-nav-o,ag" >

                            <strong className="text-center d-block mt-1">name</strong>
                            <strong className="text-center d-block mt-2">email</strong>
                            <div className="text-center my-2">
                                <Link className=" btn btn-logout bg-transparent border-danger text-danger  rounded-3" to="/">LogOut</Link>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar>

                <div className="mt-3">
                    <Routes>
                        <Route path="/" element={<AllAppointments />} />
                        <Route path="appointments" element={<AllAppointments />} />
                        <Route path="recentAppointments" element={<RecentAppointment />} />
                        <Route path="manageService/" element={<ManageAppointment />} />
                        <Route path="manageService/updateService/:serviceId" element={<UpdateService />} />
                        <Route path="addService" element={<AddService />} />
                        <Route path="makeAdmin" element={<MakeAdmin />} />
                    </Routes>

                </div>
            </div>
        </section>
    );
};

export default DashBoard;