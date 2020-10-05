import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './registration.css';

const Registration = () => {
    const [user] = useContext(UserContext);
    const [registerForm, setRegisterForm] = useContext(UserContext);
    const history = useHistory();
    const handleInput = (event) => {
        setRegisterForm({ ...registerForm, ...user, [event.target.name]: event.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://volunteer--network.herokuapp.com/registerForVolunteering', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerForm)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        history.push('/events')
    }
    return (
        <div className="register-page d-flex flex-column justify-content-center align-items-center">
            <div className="register-outside d-flex flex-column justify-content-center align-items-center">
                <img className="logo" src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer Network" />
                <div className="register-inside">
                    <h3>Register as a Volunteer</h3>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="Name">
                            <Form.Control onChange={handleInput} name="name" type="text" placeholder="Your Full Name Here" value={user.name || ''} required />
                            <Form.Text className="text-warning">
                                Don't worry..! We got your name from your login info... You're safe
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Control onChange={handleInput} name="email" type="email" placeholder="Your Email Here" value={user.email || ''} required />
                            <Form.Text className="text-warning">
                                Don't worry..! We got your name from your login info... You're safe
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Control onChange={handleInput} name="date" type="date" required />
                            <Form.Text className="text-muted">
                                Put the date when you can join in this event...
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Control onChange={handleInput} name="description" type="text" placeholder="Description" required />
                            <Form.Text className="text-muted">
                                Describe why you choose this event...?
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="event">
                            <Form.Control onChange={handleInput} name="task" type="text" placeholder="Event that You wanna join" value={registerForm.task || ''} required />
                            <Form.Text className="text-muted">
                                We got that information when you clicked... :D
                            </Form.Text>
                        </Form.Group>
                        <Button className="w-100" variant="primary" type="submit">
                            Registration
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Registration;