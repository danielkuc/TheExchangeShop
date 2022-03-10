import React from 'react'
import { Row } from 'react-bootstrap'
import Product from './Product'

const FeaturedProducts = () => {
  return (
    <>
      <p className='h2 my-5'>Featured Products</p>
      <Row>
        <Product/>
        <Product/>
        <Product/>
      </Row>
    </>
  )
}

export default FeaturedProducts