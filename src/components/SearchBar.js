import React, { useState } from 'react'
import { Button, Container, Col, Form, Row, InputGroup} from 'react-bootstrap'

const SearchBar = () => {

  const [query, setQuery] = useState("");

  return (
    <Container fluid="sm" className="mt-3">
      <Row>
        <Col xs={5} className="mx-auto" >
        <InputGroup className="mb-3">
        <Button variant="warning" id="button-addon1">
          Search
        </Button>
     {/* <Form onSubmit={(e) =>{
           e.preventDefault()
         }}> */}
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar