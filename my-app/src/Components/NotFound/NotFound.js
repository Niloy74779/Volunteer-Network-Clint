import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ height: '100vh' }} className="d-flex justify-content-center flex-column align-items-center text-danger">
            <h1 style={{ fontSize: '5rem' }}>404: Not Found</h1>
            <h3>Go Back to <Link to="/home">Home</Link></h3>
        </div>
    );
};

export default NotFound;