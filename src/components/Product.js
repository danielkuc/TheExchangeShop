import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const Product = () => {
  return (
    <Col lg="3" md="4" className='my-3'>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product