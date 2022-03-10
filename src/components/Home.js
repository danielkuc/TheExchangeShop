import React, { useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {

  const makeGetRequest = async () => {
    let response = await axios.get("https://theexchangeapi.azurewebsites.net/test");
    console.log(response.status);
  }

  useEffect(() => {
    makeGetRequest();
  },[]);

  return (
    <div className='text-center'>
      <p className='h1 my-4'>The Exchange</p>
      <hr />
      <SearchBar/>
      <FeaturedProducts/>
    </div>
  )
}

export default Home