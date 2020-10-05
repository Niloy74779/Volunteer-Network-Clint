import { faPlus, faTrashAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tab as TabBot, Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddVolunteeringScopes from './AddVolunteeringScopes';
import './admin.css'
import DeleteEvent from './DeleteEvent';
import VolunteerList from './VolunteerList';

const Tab = () => {
    return (
        <TabBot.Container id="left-tabs-example" defaultActiveKey="volunteerList">
            <Row className="m-0">
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Link to="/home"><img src="https://i.ibb.co/60VGHLd/Group-1329.png" className="logo" alt="volunteer network" /></Link>
                        <Nav.Item>
                            <Nav.Link className="list-btn btn btn-light font-weight-bold my-3 mx-5" eventKey="volunteerList"><FontAwesomeIcon icon={faUserFriends} /> Register List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="add-btn btn btn-light font-weight-bold my-3 mx-5" eventKey="addEvent"><FontAwesomeIcon icon={faPlus} /> Add Event</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="list-btn btn btn-light font-weight-bold my-3 mx-5" eventKey="deleteEvent"><FontAwesomeIcon icon={faTrashAlt} /> Delete Events</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col className="tab p-0" xs={9}>
                    <TabBot.Content>
                        <TabBot.Pane eventKey="volunteerList">
                            <VolunteerList />
                        </TabBot.Pane>
                        <TabBot.Pane eventKey="addEvent">
                            <AddVolunteeringScopes />
                        </TabBot.Pane>
                        <TabBot.Pane eventKey="deleteEvent">
                            <DeleteEvent />
                        </TabBot.Pane>
                    </TabBot.Content>
                </Col>
            </Row>
        </TabBot.Container>
    );
};

export default Tab;