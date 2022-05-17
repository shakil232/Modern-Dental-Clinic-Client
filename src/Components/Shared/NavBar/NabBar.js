import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NabBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <Navbar.Brand className="custom-primary">Modern-Dental</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className="me-3" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/appointment" className="me-3" >Services</Nav.Link>
                        <Nav.Link as={Link} to="/review" className="me-3" >Review</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" className="me-3" >Dashboard</Nav.Link>
                        <Link to="/login" className="btn btn-info border-0 rounded-3">login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NabBar;