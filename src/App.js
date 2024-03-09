import logo from './logo.svg';
import './App.css';
import Home from './Pages/home';
import { Login } from './Pages/Login';
import pin from '../src/Assets/img/Screenshot_1.png'

function App() {
  return (
    <div className="App">
 <nav className="navbar navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img
        src={pin}
        alt=""
        width={70}
        height={50}
      />
    </a>
  </div>
</nav>

      <Home/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
