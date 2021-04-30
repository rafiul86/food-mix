import React from 'react';
import { Button ,Card} from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Food = ({food}) => {
    const {strCategory ,strCategoryThumb,strCategoryDescription} = food
    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={strCategoryThumb} />
  <Card.Body>
    <Card.Title>{strCategory}</Card.Title>
    <FontAwesomeIcon style={{color : 'gold'}} icon={faStar} />
    <FontAwesomeIcon style={{color : 'gold'}} icon={faStar} />
    <FontAwesomeIcon style={{color : 'gold'}} icon={faStar} />
    <FontAwesomeIcon style={{color : 'gold'}} icon={faStar} />
    <FontAwesomeIcon style={{color : 'gold'}} icon={faStar} />
  </Card.Body>
</Card>
        </div>
    );
};

export default Food;