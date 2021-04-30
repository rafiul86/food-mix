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
      <NavBar/>
      <DropBar/>
      <Foods/>
    </div>
  );
}

export default App;
