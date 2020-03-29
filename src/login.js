import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Footer from './footer.js';
import "./login.css";

export default function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    history.push("/home");
  }

  return (
    <div className="login-container">
      <style type="text/css">
        {`
        .checkbox-input {
          max-width: 80%;
          margin: 0 auto;
        }

        .btn-submit {
          background-color: #64c552;
          color: white;
          max-width: 80%;
          display: block;
          margin: 0 auto;
          border-radius: 12px;
        },
        `}
      </style>
      <div className="main-logo">
        <img src={"/img/logo1.png"} alt="Panda Employ" width="300px"></img>
      </div>
      <div className="Login">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email">
            <FormControl
              autoFocus
              type="email"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormControl
              value={password}
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Remember" />
          </FormGroup>
          <Button block variant="submit" bsClass="btn-submit" disabled={!validateForm()} type="submit">
            Sign in
          </Button>
        </form>
        <a href="/" className="signup">create account</a>
      </div>
      <Footer/>
    </div>
  );
}