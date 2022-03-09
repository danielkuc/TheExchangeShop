import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cart, Home, NavBar, Profile } from './components';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route';

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
      <header className="Main">
        <h2>{message}</h2>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path="profile" element={<ProtectedRoute component={Profile} />} />
      </Routes>

    </div>
  );
}

export default App;
