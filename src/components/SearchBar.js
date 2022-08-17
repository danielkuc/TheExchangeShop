import React, { useState } from 'react'
import axios from 'axios';
import { Button, Container, Col, Form, Row, InputGroup} from 'react-bootstrap'

const SearchBar = ({setProducts}) => {

  const [productName, setProductName] = useState("");

  const submitQuery = async () =>{
    return axios.get("https://theexchangeapi.azurewebsites.net/shop/products.list?name=" + productName + "&pricefrom=")
    .then(response => {
      setProducts(response.data.productList);
    })
  }

  return (
    <Container fluid="sm" className="mt-3">
      <Row>
        <Col xs={5} className="mx-auto" >
          <InputGroup className="mb-3" >
            <Form.Control
              type="text"
              placeholder="Search"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Button variant="warning" type="submit" onClick={submitQuery}>
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar