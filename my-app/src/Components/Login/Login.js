import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL, uid } = result.user;
                const loggedUser = { name: displayName, email, uniqueId: uid, img: photoURL };
                setUser({ ...user, ...loggedUser });
                authToken();
                history.replace(from)

            })
            .catch(error => {
                console.log(error)
            });
    }

    const authToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(userToken => {
                sessionStorage.setItem('userToken', userToken)
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (
        <div className="login-page d-flex flex-column justify-content-center align-items-center">
            <div className="login-box-outside d-flex flex-column justify-content-center align-items-center">
                <Link to="/home"><img src="https://i.ibb.co/60VGHLd/Group-1329.png" className="logo" alt="Volunteer Network" /></Link>
                <div className="login-box-inside d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-info"><span className="blue">We</span> <span className="red">Only</span> <span className="yellow">Have</span>  <span className="blue">Google</span> <span className="green">Login</span> <span className="red">Method</span></h3>

                    <button onClick={handleLogin} className="login-btn d-flex justify-content-center align-items-center"><FontAwesomeIcon className="red" icon={faGoogle} /><span className="text"> <span className="blue">Login</span> <span className="green">With</span> <span className="blue">G</span><span className="red">O</span><span className="yellow">O</span><span className="blue">G</span><span className="green">L</span><span className="red">E</span></span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;