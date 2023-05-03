import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label> User Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="password" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Terms & Conditions" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;