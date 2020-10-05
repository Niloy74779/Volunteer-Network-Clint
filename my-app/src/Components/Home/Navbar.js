import React, { useContext, useState } from 'react';
import { Button, Modal, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
    const [showPopup, setShowPopup] = useState(false);
    const history = useHistory();

    const handleLogOut = () => {
        setUser('');
        sessionStorage.setItem('userToken', null);
        setShowPopup(false);
    };

    return (
        <NavbarBootstrap className="px-5 pb-5" variant="light">
            <Link className="navbar navbar-brand" to="/home">
                <img className="logo" src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer Network" />
            </Link>
            <Nav className="ml-auto">
                <Link className="nav-link font-weight-bold" to="/home">Home</Link>
                <Link className="nav-link font-weight-bold" to="/destination">Destination</Link>
                <Link className="nav-link font-weight-bold" to="/blog">Blog</Link>
                <Link className="nav-link font-weight-bold" to="/events">Events</Link>
                {
                    user.img ? <div className="btn p-0" title="Wanna Log Out? Click Here" onClick={() => setShowPopup(true)} style={{ height: '40px', width: '40px' }}><img src={user.img} alt="User" className="img-fluid rounded-circle" /></div> :
                        <Button className="px-3 mx-2" onClick={() => history.push('/login')}>Login</Button>
                }
                <Modal size="md" show={showPopup} onHide={() => setShowPopup(false)} aria-labelledby="example-modal-sizes-title-sm">
                    <Modal.Body>
                        <h3 className="p-5">Wanna Log Out??</h3>
                        <div className="buttons d-flex justify-content-end">
                            <Button onClick={handleLogOut} variant="danger">Log Out</Button> <Button onClick={() => setShowPopup(false)} variant="muted">Cancel</Button>
                        </div>
                    </Modal.Body>
                </Modal>
                <Button className="px-3 mx-2 btn-dark" onClick={() => history.push('/admin')}>Admin</Button>
            </Nav>
        </NavbarBootstrap>
    );
};

export default Navbar;