import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from './Product'

const FeaturedProducts = () => {
  return (
    <Container className='text-center'>
      <p className='h2 mb-5'>Featured Products</p>
      <Row>
        <Product/>
        <Product/>
        <Product/>
      </Row>
    </Container>
  )
}

export default FeaturedProducts