import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableBody from './TableBody';
import './admin.css'

const VolunteerList = () => {
    const [registrationData, setRegistrationData] = useState([]);

    useEffect(() => {
        fetch('https://volunteer--network.herokuapp.com/registrationInfo')
            .then(res => res.json())
            .then(data => setRegistrationData(data))
    }, [])
    return (
        <div className="list-container">
            <h2>Volunteer Register List</h2>
            <div className="table-container">
                <Table hover className="main-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Registration Date</th>
                            <th>Event</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registrationData.map(regData => <TableBody key={regData._id} tableData={regData} />)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default VolunteerList;