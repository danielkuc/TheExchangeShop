import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductFeatures = (props) => {
  return (
<div className='container py-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-orange my5'>
        </div>
      </div>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          {/* <img src={image_link} className='img-fluid w-100' alt={props.name}/> */}
        </div>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <p className='h4'>{props.product.name}</p>
          <p className='h4 text-primary'>
            <strong>
              Price: £ {props.product.price}
            </strong>
          </p>
          <p className='font-weight-bold mt-3 mb-0'>
            Product description:
          </p>
          <p>
            {props.product.description}
          </p>
          <div>
            <Link to='/products'>
              <Button className="d-flex">
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>  )
}

export default ProductFeatures