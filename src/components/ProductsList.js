import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Product from './Product';
import SearchBar from './SearchBar';

const ProductsList = ({products, setProducts}) => {

  return (
    <div>
      <SearchBar products={products} setProducts={setProducts}/>
      <Container>
      <Button onClick={() => console.log(products)}/>
        <Row>
          {products.map(product => {
            return <Product product={product} key={product.id}/>
          })}
        </Row>
      </Container>
    </div>
  )
}

export default ProductsList