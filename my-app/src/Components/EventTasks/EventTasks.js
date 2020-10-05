import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar';
import UsersEvents from '../UsersEvents/UsersEvents';
import './eventTasks.css'

const EventTasks = () => {
    const [events, setEvents] = useState([]);
    const [user] = useContext(UserContext);
    const eventSlice = events.slice(0, 10) || events;
    useEffect(() => {
        fetch(`https://volunteer--network.herokuapp.com/getUserEvents/?uniqueId=${user.uniqueId}`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${sessionStorage.getItem('userToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [user.uniqueId])
    return (
        <div className="event-tasks-page">
            <Navbar />
            <Row className="m-0">
                {
                    eventSlice.map(event => <UsersEvents event={event} key={event._id} />)
                }
            </Row>
        </div>
    );
};

export default EventTasks;