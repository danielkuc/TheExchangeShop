import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const Product = ({productName, productDescription, price}) => {
  return (
    <Col lg="3" md="4" className='my-3'>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Text>
            {productDescription}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product