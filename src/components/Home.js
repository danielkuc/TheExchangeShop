import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Home = () => {

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
    <div className='text-center'>
      <p className='h1 my-4'>The Exchange</p>
      <hr />
      <SearchBar/>
      <Row>
        <h2>{`Hello from Home and ${message}`}</h2>
      </Row>
    </div>
  )
}

export default Home