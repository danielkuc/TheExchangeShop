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
    <Container className='text-center'>
      <div className='my-5'>
        <p className='h1 my-4'>The Exchange</p>
        <hr />
      </div>
      <div className='mb-5'>
        <Link to="products" className='shop-now p-3'>Shop Now</Link>
      </div>
      <FeaturedProducts/>
    </Container>
  )
}

export default Home