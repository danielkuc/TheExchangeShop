import React from 'react';
import { Link } from 'react-router-dom';


const CartTotals = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to='/'>
              <button className="btn btn-outline-danger mb-3 px-5 text-capitalize" type='button' >
                clear cart
              </button>
            </Link>
            <p className="h5">
              <span className="text-title">
                subtotal:</span>
                <strong>£ subtotal</strong>
            </p>
            <p className="h5">
              <span className="text-title">
                tax:</span>
                <strong>£ cart tax</strong>
            </p>
            <p className="h5">
              <span className="text-title">
                total:</span>
                <strong>£ cart total</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTotals;
