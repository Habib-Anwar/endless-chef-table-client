import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h3 className='text-center mt-4'>Welcome To Endless Chef Table!!</h3>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
               <div>
               <Button className='mt-4' variant="info" size="lg" active>
                    <FaGoogle></FaGoogle> Google Sign-in
                </Button>
                <br></br>
               <Button className='mt-2' variant="info" size="lg" active>
                  <FaGithub></FaGithub>  GitHub Sign-in
                </Button>
               </div>
               <p><small>New to Endless Chef Table? <Link to ='/register'>Register</Link></small></p>
            </Form>
        </div>
    );
};

export default Login;