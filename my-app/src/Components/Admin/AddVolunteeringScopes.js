import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AddVolunteeringScopes = () => {
    const [addScope, setAddScope] = useState({ color: "rgba(0,0,0,0.5" });
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleClose = () => {
        setShow(false)
        history.push('/home');
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        fetch('https://volunteer--network.herokuapp.com/addVolunteeringScope', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addScope)
        })
            .then(res => {
                if (res.status === 200) {
                    setShow(true)
                }
            })
    };
    const handleInput = (e) => {
        setAddScope({ ...addScope, [e.target.name]: e.target.value });
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="d-flex flex-column justify-content-center">
                    <h4 className="text-success text-center py-5">Successfully Added Event <FontAwesomeIcon icon={faCheckDouble} /></h4>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
            <div className="form-area">
                <div>
                    <h2>Add Event</h2>
                </div>
                <Form className="main-form" onSubmit={handleAddEvent}>
                    <Row className="m-0">
                        <Col xs={6}>
                            <Form.Group controlId="title">
                                <Form.Label><strong>Event Title</strong></Form.Label>
                                <Form.Control onChange={handleInput} name="task" type="text" placeholder="Title for this event" required />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group controlId="date">
                                <Form.Label><strong>Event Date</strong></Form.Label>
                                <Form.Control onChange={handleInput} name="date" type="date" />
                                <Form.Text>
                                    Date of the event
                            </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label><strong>Description</strong></Form.Label>
                                <Form.Control onChange={handleInput} name="description" as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group controlId="banner">
                                <Form.Label><strong>Banner</strong></Form.Label>
                                <Form.Control onChange={handleInput} name="img" type="text" placeholder="Banner Link" />
                            </Form.Group>
                            <Form.Text>
                                Please Provide a valid image source link for this event
                        </Form.Text>
                        </Col>
                        <Col xs={12}>
                            <Button variant="primary" type="submit">
                                Add Event
                        </Button>
                        </Col>
                    </Row>
                </Form >
            </div >
        </>

    );
};

export default AddVolunteeringScopes;