import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const VolunteeringScopes = (props) => {
    const { color, img, task, _id } = props.scopes;
    const [registerForm, setRegisterForm] = useContext(UserContext);
    const [user] = useContext(UserContext);
    const history = useHistory();

    const handleRegistration = (id, scope, picture) => {
        setRegisterForm({ ...registerForm, ...user, task: scope, taskThumbnail: picture })
        history.push("/registration")
    }
    return (
        <Col onClick={() => handleRegistration(_id, task, img)} xs={3} className="d-flex justify-content-around align-items-center pb-5">
            <div className="task-box d-flex" style={{ background: img ? `url('${img}')` : 'powderblue', backgroundSize: '270px 320px ', backgroundRepeat: 'no-repeat' }}>
                {!img && <p className="display-5 text-primary position-absolute banner-text">Banner...!!! <br /> Coming Soon.........!</p>}
                <h5 className="text-center text-light p-4 w-100 task-name position-absolute" style={{ background: `${color}` }}>{task}</h5>
            </div>
        </Col >
    );
};

export default VolunteeringScopes;