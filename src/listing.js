import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from './header.js';
import "./listing.css";

export default function Login(props) {
  const history = useHistory();
  const [search, setSearch] = useState("");

  return (
    <div>
        <Header/>
        <div className="listing-container">
        
        </div>
    </div>
  );
}