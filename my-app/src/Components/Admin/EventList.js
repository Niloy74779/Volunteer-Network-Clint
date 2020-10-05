import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EventList = (props) => {
    const { task, img, date, _id } = props.scope;
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [fetched, setFetched] = useState(true);

    const handleClose = () => setShow(false);

    const handleDelete = (id) => {
        fetch(`https://volunteer--network.herokuapp.com/deleteEvent/?id=${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (res.status === 200) {
                    setShow(true)
                    setHide(true)
                    setFetched(!fetched)
                }
            })
    };
    useEffect(() => {
        handleDelete();
    }, [fetched])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="d-flex flex-column justify-content-center">
                    <h4 className="text-danger py-5 text-center">Deleted Successfully <FontAwesomeIcon icon={faTrashAlt} /></h4>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                </Modal.Body>
            </Modal>
            {
                hide ? null :
                    <tr>
                        <td>
                            <div className="banner">
                                {img ? <img src={img} alt="banner" className="img-fluid rounded-circle" /> : <small className="text-primary bg-muted rounded-circle">No  Banner</small>}
                            </div>
                        </td>
                        <td>{task}</td>
                        <td>{date || 'Not Available'}</td>
                        <td><Button variant="danger" onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} /></Button></td>
                    </tr>
            }
        </>
    );
};

export default EventList;