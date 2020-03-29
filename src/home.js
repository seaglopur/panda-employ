import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./home.css";

export default function Home() {

    const history = useHistory();

    function changePage(page) {
        if (page === "offer") {
            history.push("/listing");
        } else if (page === "hire") {
            history.push("/listing");
        }
    }

    return (
    <div className="home-background">
        <div className="home-container">
            <div className="logo">
                <img src={"/img/logo-2.png"} alt="Panda Employ" width="300px"></img>
            </div>
            <div className="main-txt">
                <h2>The best job platform in the medical field.</h2>
                <h2>Hire and offer your work with the panda</h2>
            </div>
            <div className="cards-options">
                <Card tag="a" onClick={() => changePage('offer')} style={{ width: '200px', height: '200px' }}>
                    <Card.Img variant="top" src="/img/offer.png"/>
                    <Card.Body>
                        <Card.Title>to offer</Card.Title>
                    </Card.Body>
                </Card>
                <Card tag="a" onClick={() => changePage('hire')} style={{ width: '200px', height: '200px' }}>
                    <Card.Img variant="top" src="/img/offer.png"/>
                    <Card.Body>
                        <Card.Title>hire</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div className="footer-txt">
                <h3>Choose between offering your job and hiring a professional</h3>
            </div>
        </div>
    </div>
    );
}