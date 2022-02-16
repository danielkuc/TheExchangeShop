import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavBar } from './components';



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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, World!</h1>
        <h2>{message}</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
