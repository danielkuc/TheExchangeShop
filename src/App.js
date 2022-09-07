import React, { useState } from 'react';
import './App.css';
import { Default, Home, NavBar, Profile, ProductFeatures, ProductsList } from './components';
import Cart from './cart/Cart';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route';


function App() { 
  const [productsList, setProductsList] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Test name",
      price : 10.99,
      quantity : 2
    }
  ]);
  // const [isLoading, setLoading] = useState(false);
 
  return (
    <React.Fragment>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='features' element={<ProductFeatures product={productDetails} />} />
          <Route path='products' element={<ProductsList productDetails={productDetails} setDetails={setProductDetails} products={productsList} setProducts={setProductsList} />} />
          <Route path="profile" element={<ProtectedRoute component={Profile} />} />
          <Route path='/*' element={<Default />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
