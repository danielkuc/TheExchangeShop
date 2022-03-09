import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

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
    <Container>
      <Row>
        <h2>{`Hello from Home and ${message}`}</h2>
      </Row>
    </Container>
  )
}

export default Home