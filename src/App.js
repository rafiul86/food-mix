import logo from './logo.svg';
import './App.css';
import AppBar from './components/appBar/AppBar';
import NavBar from './components/navBar/NavBar';
import Foods from './components/foods/Foods';
import DropBar from './components/foods/food/dropBar/DropBar';
function App() {
  return (
    <div className="App">
      <AppBar/>
      <DropBar/>
      <NavBar/>
      <h1 className="mt-3 mb-5">Sub-Category Title | <span style={{fontSize : 'x-large' ,color :'grey'}}>200 Recipes</span></h1>
      <Foods/>
    </div>
  );
}

export default App;
