import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './admin.css'

const TableBody = (props) => {
    const { name, fullName, email, _id, date, task } = props.tableData;
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [fetched, setFetched] = useState(true);

    const handleClose = () => setShow(false);
    const handleDelete = (id) => {
        fetch(`https://volunteer--network.herokuapp.com/cancelRegistration/?id=${id}`, {
            method: 'DELETE'
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
                    <h4 className="my-5 text-danger text-center">Deleted Successfully <FontAwesomeIcon icon={faTrashAlt} /></h4>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                </Modal.Body>
            </Modal>
            {
                hide ? null :
                    <tr>
                        <td>{name || fullName}</td>
                        <td>{email}</td>
                        <td>{date}</td>
                        <td>{task}</td>
                        <td>
                            <button onClick={() => handleDelete(_id)} className="delete-icon bg-danger text-light rounded" ><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </td>
                    </tr>
            }
        </>
    );
};

export default TableBody;