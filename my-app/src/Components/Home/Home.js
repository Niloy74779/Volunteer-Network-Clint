import React, { useEffect, useState } from 'react';
import './home.css';
import Navbar from './Navbar';
import homeBackground from '../../Assets/homebg.png'
import { Button, Form, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import VolunteeringScopes from './VolunteeringScopes';


const Home = () => {
    const [volunteeringScopes, setVolunteeringScopes] = useState([]);
    const [showSpinner, setShowSpinner] = useState();
    useEffect(() => {
        setShowSpinner(true)
        fetch('https://volunteer--network.herokuapp.com/volunteeringScopes')
            .then(res => res.json())
            .then(data => {
                setVolunteeringScopes(data)
                setShowSpinner(false)
            })
    }, []);
    const shuffle = volunteeringScopes.sort((a, b) => 0.5 - Math.random());
    const shuffled20 = shuffle.slice(0, 20);
    return (
        <div className="header">
            <img className="header-background" src={homeBackground} alt="header background" />
            <Navbar />
            <h1 className="text-center font-weight-bold mt-5">
                I GROW BY HELPING PEOPLE IN NEED
            </h1>
            <Form className="mb-5">
                <InputGroup className="mb-3 search-input mt-5">
                    <FormControl
                        placeholder="Search Your Desired Volunteering Scope"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            <Row className="m-0">
                {
                    showSpinner ? <div className="d-flex justify-content-center" style={{ width: '100vw' }}><Spinner animation="border" variant="success" /> </div> :
                        shuffled20.map(scope => <VolunteeringScopes scopes={scope} key={scope._id} />)
                }
            </Row>
        </div>
    );
};

export default Home;