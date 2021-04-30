import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Meals from './meals/Meals';
import './navBar.css'


const NavBar = () => {
  const [search ,setSearch] = useState([])
  const [meals,setMeals] = useState([])
    const handleSearch =(e)=>{
      setSearch(e.target.value)
           }
           useEffect(()=>{
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
           },[search])

  return (
    <div>
      <div className="row">
      <div className="col-md-9 col-sm-12">
        <input onChange={handleSearch} placeholder="Search Your Favorite" className="input-design"/>
      </div>
      <div className="col-md-3 col-sm-12">
      <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
      </div>
    </div>
      <div className="row">
      {
        meals.map(meal=><Meals meal={meal}></Meals>)
      }
      </div>
    </div>
  );
};

export default NavBar;