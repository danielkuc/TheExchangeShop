import React, { useState } from 'react'
import axios from 'axios';
import { Button, Container, Col, Form, Row} from 'react-bootstrap'

const SearchBar = ({setProducts}) => {

  const [productName, setProductName] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const submitQuery = async (e) =>{
    e.preventDefault();
    return axios.get("https://theexchangeapi.azurewebsites.net/shop/products.list?name=" + productName + "&pricefrom=" + priceMin + "&priceto="+ priceMax
    )
    .then(response => {
      setProducts(response.data.productList);
    })
  }

  return (
    <Container className="pt-4">
      <Row>
        <Col sm={6} className="mx-auto">
      <Form>
        <Row className="mb-3" >
          <Col xs={6} className="mx-auto">
            <Form.Control 
              type="number"
              placeholder="Min price" 
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
          </Col>
          <Col xs={6} className="mx-auto" >
            <Form.Control 
              type="number"
              placeholder="Max price"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </Col>
        </Row>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Product Name"
            value={productName}  
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitQuery} className="mt-3" >Search</Button>
      </Form>
      </Col>
      </Row>
    </Container>
  )
}

export default SearchBar