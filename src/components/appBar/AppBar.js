import React from 'react';
import { Button,Navbar, Form,Nav,FormControl} from 'react-bootstrap';
import './appBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faBell } from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@material-ui/core';





const AppBar = () => {
  return (
    <div>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Bevmix</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">For You</Nav.Link>
      <Nav.Link href="#features">Discover</Nav.Link>
      <Nav.Link href="#pricing">Watch</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="post a recipe" className="search-box" />
      <FontAwesomeIcon style={{color : 'black',margin : '5px'}} icon={faEnvelope} />
      <FontAwesomeIcon style={{color : 'black',margin : '5px'}} icon={faBell} />
    </Form>
  </Navbar>
    </div>
  );
};

export default AppBar;