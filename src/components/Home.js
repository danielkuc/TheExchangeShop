import React, { useEffect } from 'react';
import axios from 'axios';
import FeaturedProducts from './FeaturedProducts';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

  const makeGetRequest = async () => {
    let response = await axios.get("https://theexchangeapi.azurewebsites.net/test");
    console.log(response.status);
  }

  useEffect(() => {
    makeGetRequest();
  },[]);

  return (
    <div className='w-100 vh-90'>
    <Container className='text-center'>
      <div className='py-5'>
        <p className='h1'>The Exchange</p>
        <hr />
      </div>
      <div className='pb-5'>
        <Link to="products" className='shop-now p-3'>Shop Now</Link>
      </div>
      <FeaturedProducts/>
    </Container>
    </div>
  )
}

export default Home