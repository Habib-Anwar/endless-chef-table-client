import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/chef-logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <Navbar bg="info" variant="light" >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Nav className="mx-auto fs-5" >
                        <Link style={{textDecoration:'none', marginRight:'25px', color:'black'}} to="/">Home</Link>
                        <Link style={{textDecoration:'none', marginRight:'25px', color:'black'}} to = "/blog">Blog</Link>
                        <Link style={{textDecoration:'none', marginRight:'25px', color:'black'}} to ="/login">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;