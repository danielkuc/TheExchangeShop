import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap'
import Product from './Product'

const FeaturedProducts = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  const getData = async () => {
    const res = await fetch('data.json');
    const data = await res.json();
    return data;
  }

  useEffect( () => {
    const fetchData = async () => {
      const result = await getData();
      console.log(result.results)
      setFeaturedProjects(result.results);
    }
    fetchData();
  } ,[]);
  return (
    <>
      <p className='h2 pb-4'>Featured Products</p>
      <Row>
        {featuredProjects.map(product => <Product passedProduct={product} key={product.id} />)}
      </Row>
    </>
  )
}

export default FeaturedProducts