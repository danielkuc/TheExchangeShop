import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavBar } from './components';
import { Outlet } from 'react-router-dom';



function App() {
  const [message, setMessage] = useState("");

  const makeGetRequest = async () => {
    let response = await axios.get("https://theexchangeapi.azurewebsites.net/test");
    console.log(response.status);
    setMessage(response.data);
  }

  useEffect(() => {
    makeGetRequest();
  },[]);
  
  
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, World!</h1>
        <h2>{message}</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
