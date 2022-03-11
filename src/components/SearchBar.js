import React, { useState } from 'react'
import { Col,Form } from 'react-bootstrap'

const SearchBar = () => {

  const [inputText, setInputText] = useState("");

  return (
    <div className=''>
      <Col md={6} className="m-auto">
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
    </div>
  )
}

export default SearchBar