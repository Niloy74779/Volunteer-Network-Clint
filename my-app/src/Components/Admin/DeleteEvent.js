import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import EventList from './EventList';

const DeleteEvent = () => {
    const [volunteeringScopes, setVolunteeringScopes] = useState([]);
    useEffect(() => {
        fetch('https://volunteer--network.herokuapp.com/volunteeringScopes')
            .then(res => res.json())
            .then(data => setVolunteeringScopes(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="list-area">
            <h2>Delete Events</h2>
            <div className="m-5">
                <Table hover>
                    <thead>
                        <tr>
                            <th>Banner</th>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteeringScopes.map(scope => <EventList scope={scope} key={scope._id} />)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default DeleteEvent;