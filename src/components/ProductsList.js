import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Product from './Product';
import SearchBar from './SearchBar';

const ProductsList = ({products, setProducts}) => {
  const numberOfProducts = [...Array(24).keys()];
  return (
    <div>
      <SearchBar products={products} setProducts={setProducts}/>
      <Button onClick={() => console.log(products)}/>
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