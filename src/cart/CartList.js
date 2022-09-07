import React from 'react';
import CartItem from './CartItem'


const CartList = ({ cart, setCart }) => {
  return (
    <div className='container'>
        {cart.map(item => {return <CartItem key={item.id} item={item} />})}
    </div>
  )
}

export default CartList;