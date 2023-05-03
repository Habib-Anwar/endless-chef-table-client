import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/chef-logo.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="info" variant="light" >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Nav className="mx-auto fs-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;