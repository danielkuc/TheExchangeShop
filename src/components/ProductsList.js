import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from './Product';
import SearchBar from './SearchBar';

const ProductsList = ({products}) => {
  const numberOfProducts = [...Array(24).keys()];
  return (
    <div>
      <SearchBar  />
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