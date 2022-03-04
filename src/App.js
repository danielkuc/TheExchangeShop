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
    <div>
      <NavBar/>
      <Outlet/>
      <header className="Main">
        <h2>{message}</h2>
      </header>
    </div>
  );
}

export default App;
