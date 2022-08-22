import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from './Product';
import SearchBar from './SearchBar';

const ProductsList = ({products, setDetails, setProducts}) => {

  return (
    <div>
      <SearchBar products={products} setProducts={setProducts}/>
      <Container>
        <Row>
          {products.map(product => {
            return <Product passedProduct={product} key={product.id}  setProductDetails={setDetails}/>
          })}
        </Row>
      </Container>
    </div>
  )
}

export default ProductsList