import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';



const Login = () => {

    // const {signIn} = useContext();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    
    const from = location.state?.from?.pathname || '/';
    console.log(from);
    
    const handleLogin = event =>{
        event.preventDefault();
    
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <h3 className='text-center mt-4'>Welcome To Endless Chef Table!!</h3>
            <Form className='w-50 mx-auto' onSubmit={handleLogin}>
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