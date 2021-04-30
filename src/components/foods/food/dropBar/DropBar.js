import { Grid } from '@material-ui/core';
import React from 'react';
import {Dropdown} from 'react-bootstrap';
const DropBar = () => {
    return (
        <div className="row ">
          <div className="d-flex col-md-6"> 
          <Dropdown style={{margin : '10px'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Categories
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown style={{margin : '10px'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Ingredients
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown style={{margin : '10px'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Tools
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown style={{margin : '10px'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Difficulties
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown style={{margin : '10px'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Flavour Profile
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
 </div>

       <div className="d-flex flex-row-reverse col-md-6"> 
        <Dropdown style={{margin : '10px' }} >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>   
        </div>  
        </div>
    );
};

export default DropBar;