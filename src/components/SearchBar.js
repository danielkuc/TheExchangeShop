import React, { useState } from 'react'
import { Col,Form, Row } from 'react-bootstrap'

const SearchBar = () => {

  const [inputText, setInputText] = useState("");

  return (
    <Row className='my-5'>
      <Col md={4} className="m-auto">
        <Form onSubmit={(e) =>{
          e.preventDefault()
        }}>
        <Form.Control 
          type='text'
          placeholder='Search'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        </Form>
      </Col>
    </Row>
  )
}

export default SearchBar