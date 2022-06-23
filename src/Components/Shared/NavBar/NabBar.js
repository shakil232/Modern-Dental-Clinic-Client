import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import useAuth from '../../../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast';
import Logo from '../../../images/main-logo.png';
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons'


const NabBar = () => {
    const { user, logOut } = useAuth();

    //   logOut-Handel 
    const handelLogOut = () => {
        logOut({});
        toast.success("Logged Out", {
            duration: 4000,
        });
    };


    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" sticky="top" >
            <Toaster />
            <Container>
                <Navbar.Brand style={{ marginTop: '-10px' }} className="d-flex justify-content-center align-content-center  " as={Link} to="/" >
                    <FontAwesomeIcon className=" custom-primary fs-2" icon={faTooth} />
                    <Image style={{ marginLeft: '-7px' }} width="100" height="35" src={Logo} alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className="me-3 text-white" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/appointment" className="me-3 text-white" >Services</Nav.Link>
                        <Nav.Link as={Link} to="/review" className="me-3 text-white" >Review</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" className="me-3 text-white" >Dashboard</Nav.Link>

                        {
                            user?.email ?
                                <NavDropdown
                                    style={{ marginTop: '-6px' }}
                                    title={
                                        user?.photo ?
                                            <Image
                                                width="40"
                                                height="40"
                                                roundedCircle
                                                src={user?.photo} /> :

                                            <Image
                                                width="40"
                                                height="40"
                                                roundedCircle
                                                src="https://i.ibb.co/5GzXkwq/user.png"
                                                alt="user-pp" />

                                    }
                                    id="collasible-nav-o,ag" >

                                    <strong className="text-center d-block mt-1">{user.displayName}</strong>
                                    <strong className="text-center d-block mt-2">{user.email}</strong>
                                    <div className="text-center my-2">
                                        <Link onClick={handelLogOut} className=" btn btn-logout bg-transparent border-danger text-danger  rounded-3" to="/">LogOut</Link>
                                    </div>
                                </NavDropdown>
                                : <Link className=" btn btn-main border-0 rounded-3 " to="/login">Login</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NabBar;