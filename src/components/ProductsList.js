import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from './Product';

const ProductsList = () => {
  const numberOfProducts = [...Array(24).keys()];

  return (
    <div>
      <Container>
        <Row>
          {numberOfProducts.map(num => {
            return <Product key={num} />
          })}
        </Row>
      </Container>
    </div>
  )
}

export default ProductsList