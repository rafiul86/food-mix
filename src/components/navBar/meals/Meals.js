import React from 'react';
import { Button ,Card} from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Meals = ({meal}) => {
    const {strMeal,strMealThumb} = meal
    console.log(meal)
    return (
        <div>
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={strMealThumb} />
  <Card.Body>
    <Card.Title>{strMeal}</Card.Title>
    <FontAwesomeIcon style={{color : 'goldenrod'}} icon={faStar} />
    <FontAwesomeIcon style={{color : 'goldenrod'}} icon={faStar} />
    <FontAwesomeIcon style={{color : 'goldenrod'}} icon={faStar} />
    <FontAwesomeIcon style={{color : 'goldenrod'}} icon={faStar} />
    <FontAwesomeIcon style={{color : 'goldenrod'}} icon={faStar} />
  </Card.Body>
</Card>
        </div>
    );
};

export default Meals;