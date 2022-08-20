import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const Product = ({productName, productDescription, price}) => {
  return (
    <Col lg="3" md="4" sm="6" xs="6"className='my-3'>
      <Card className="productCard">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Text>£ {price}</Card.Text>
          <Card.Footer className="text-center" >
            {productDescription}
          </Card.Footer>
            <Button variant="primary" className="w-100" >Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product