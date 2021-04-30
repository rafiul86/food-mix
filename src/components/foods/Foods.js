import { Grid } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Food from './food/Food';

const Foods = () => {
    const [foods,setFoods] = useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data =>setFoods(data.categories))
    },[])
    
    return (
        <div>
            <Grid container spacing={4}>
            {
                foods.map(food => <Grid item xs={12} md={6} lg={3}><Food food={food}></Food> </Grid>)
            }
            </Grid>
        </div>
    );
};

export default Foods;