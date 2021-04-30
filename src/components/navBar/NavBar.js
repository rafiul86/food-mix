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
      <form class="navbar-form navbar-left">
  <input type="text" onChange={handleSearch} className="form-control col-lg-12" placeholder="Search"/>
</form>
        {/* <input  placeholder="Search Your Favorite" className="input-design"/> */}
      </div>
      
    </div>
    <h1 className="mt-3 mb-5">Shots | <span style={{fontSize : 'x-large' ,color :'grey'}}>200 Recipes</span></h1>
      <div className="row ms-2">
      {
        meals.map(meal=><Meals meal={meal}></Meals>)
      }
      </div>
    </div>
  );
};

export default NavBar;