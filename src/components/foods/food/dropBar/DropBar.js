import { Grid } from '@material-ui/core';
import React from 'react';
import {Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlender, faFingerprint, faHamburger, faShoppingBasket, faSortAmountDown, faStar } from '@fortawesome/free-solid-svg-icons'
const DropBar = () => {
    return (
        <div className="row mt-4">
      <div className=" col-md-8"> 
          <Grid style={{marginLeft : '5px'}} container spacing={12}>
          <Grid item xs={4} lg={2}>
          <Dropdown >
  <Dropdown.Toggle variant="light" id="dropdown-basic">
  <FontAwesomeIcon style={{color : 'black'}} icon={faHamburger} />
  {' '}
    Categories
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </Grid>
          <Grid style={{marginLeft : '5px'}} item xs={4} lg={2}>
<Dropdown >
  <Dropdown.Toggle variant="light" id="dropdown-basic">
  <FontAwesomeIcon style={{color : 'black'}} icon={faShoppingBasket} />
  {' '}
    Ingredients
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Grid>
<Grid item xs={4} lg={2}>
<Dropdown >
  <Dropdown.Toggle variant="light" id="dropdown-basic">
  <FontAwesomeIcon style={{color : 'black'}} icon={faBlender} />
  {' '}
    Tools
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Grid>
<Grid item xs={4} lg={2}>
<Dropdown >
  <Dropdown.Toggle variant="light" id="dropdown-basic">
  <FontAwesomeIcon style={{color : 'black'}} icon={faSortAmountDown} />
  {' '}
    Difficulties
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Grid>
<Grid item xs={4} lg={2}>
<Dropdown >
  <Dropdown.Toggle variant="light" id="dropdown-basic">
  <FontAwesomeIcon style={{color : 'black'}} icon={faFingerprint} />
  {' '}
    Flavor Profile
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Grid>
 </Grid>
      </div>

       <div className=" flex-row-reverse col-md-4"> 
        <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Recommended
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