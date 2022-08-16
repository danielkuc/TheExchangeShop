import React, { useState, useEffect } from 'react';
import './App.css';
import { Cart,Default, Home, NavBar, Profile, ProductsList } from './components';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route';
import axios from 'axios';

function App() { 
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () =>{
      return axios.get("https://theexchangeapi.azurewebsites.net/shop/products.list")
      .then(response => setProductsList(response.data.productList));
    }
    fetchProducts();
  }, [])
  
  return (
    <React.Fragment>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<ProductsList products={productsList} />} />
          <Route path="profile" element={<ProtectedRoute component={Profile} />} />
          <Route path='/*' element={<Default />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
