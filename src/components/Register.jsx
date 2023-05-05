import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const {createUser} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        setError('');
        setSuccess('');
        if(password.length <6){
            setError('password must be 6 characters or longer')
            return
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
            setSuccess('Successfully Registerd')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center text-primary'>Please Register!!</h2>
            <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label> User Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" src="" alt="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label=" Accept Terms & Conditions" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Register
                </Button>
                <p className='text-danger'><small>{error}</small></p>
                <p className='text-success'>{success}</p>           
            </Form>
        </div>
    );
};

export default Register;