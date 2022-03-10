import React, { useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import FeaturedProducts from './FeaturedProducts';
import { Button, Container } from 'react-bootstrap';

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
      <div className='vh-30'>
        <p className='h1 my-4'>The Exchange</p>
        <hr />
        <SearchBar/>
      </div>
      <div className='mb-5'>
        <Button variant='outline-dark' size='lg' className='shop-now mb-5'>Shop Now</Button>
      </div>
      <FeaturedProducts/>
    </Container>
  )
}

export default Home