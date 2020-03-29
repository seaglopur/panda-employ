import React, { useState } from "react";
import { Button, Form, FormGroup, FormControl, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from './header.js';
import "./listing.css";

export default function Login(props) {
  const history = useHistory();
  const [search, setSearch] = useState("");

  function changePage(page) {
      if (page === 'vacancy') {
        history.push("/home");
      } else if (page === 'curriculum') {
        history.push("/home");
      }
  }

  return (
    <div>
        <style type="text/css">
            {`
            .btn-green {
                background-color: #64c552;
                color: white;
                border-radius: 12px;
            }

            .btn-candidate {
                background-color: #64c552;
                color: white;
                border-radius: 20px;
                height: 35px;
                width: 150px;
            }
            `}
        </style>
        <Header/>
        <div className="listing-container">
            
            <div className="top-buttons">
                <Button variant="green" onClick={() => changePage('vacancy')}>
                    register a vacancy
                </Button>
                <Button variant="green" onClick={() => changePage('curriculum')}>
                    register your curriculum
                </Button>
            </div>

            <div className="search-bar">
                <Form inline>
                    <FormControl type="text" placeholder="Search vacancy or professionals" className="mr-sm-2" />
                </Form>
            </div>

            <div className="vacancies-container">
                <h3>Here you can find all the vacancies published in the last days</h3>
                <div className="list-vacancies">
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <img src="/img/mayo.png" alt="mayo-clinic"/>
                            <div className="info-container">
                                <h4 className="title">Infectious Disease Specialist</h4>
                                <h4 className="institution">Mayo Clinic</h4>
                                <h4 className="location">5777 E. Mayo Blvd. Phoenix, AZ 85054 - USA</h4>
                                <h4 className="recent">published 2 days ago</h4>
                            </div>
                            <Button variant="candidate" onClick={() => changePage('curriculum')}>
                                candidate
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <img src="/img/mgv.png" alt="mgh"/>
                            <div className="info-container">
                                <h4 className="title">General Practitioner</h4>
                                <h4 className="institution">Massachusetts General Hospital</h4>
                                <h4 className="location">55 Fruit Street Boston, MA 02114 - USA</h4>
                                <h4 className="recent">published 2 days ago</h4>
                            </div>
                            <Button variant="candidate" onClick={() => changePage('curriculum')}>
                                candidate
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <img src="/img/mgv.png" alt="mgh"/>
                            <div className="info-container">
                                <h4 className="title">Head Nurse</h4>
                                <h4 className="institution">Massachusetts General Hospital</h4>
                                <h4 className="location">55 Fruit Street Boston, MA 02114 - USA</h4>
                                <h4 className="recent">published 3 days ago</h4>
                            </div>
                            <Button variant="candidate" onClick={() => changePage('curriculum')}>
                                candidate
                            </Button>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <h3 className="more-jobs">see more jobs</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>

            <div className="candidates-container">
                <h3>Here you can find all the vacancies published in the last days</h3>
                <div className="list-candidates">
                    <ListGroup variant="flush" style={{borderRadius: '20px'}}>
                        <ListGroup.Item>
                            <img src="/img/john.png" alt="mayo-clinic"/>
                            <div className="info-container">
                                <h4 className="title">Infectious Disease Specialist</h4>
                                <h4 className="institution">Mayo Clinic</h4>
                                <h4 className="location">5777 E. Mayo Blvd. Phoenix, AZ 85054 - USA</h4>
                                <h4 className="recent">published 2 days ago</h4>
                            </div>
                            <Button variant="candidate" onClick={() => changePage('curriculum')}>
                                hire
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <img src="/img/bete.png" alt="mgh"/>
                            <div className="info-container">
                                <h4 className="title">General Practitioner</h4>
                                <h4 className="institution">Massachusetts General Hospital</h4>
                                <h4 className="location">55 Fruit Street Boston, MA 02114 - USA</h4>
                                <h4 className="recent">published 2 days ago</h4>
                            </div>
                            <Button variant="candidate" onClick={() => changePage('curriculum')}>
                                hire
                            </Button>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <h3 className="more-candidates">see more candidates</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    </div>
  );
}