import React from 'react'
import EmptyCart from './EmptyCart'
import Title from '../components/Title'
import CartList from './CartList'
import CartTotals from './CartTotals'

const Cart = ({ cart, setCart }) => {

  if (cart.length > 0) {
    return(
      <section>
        <Title name='your' title='cart' />
        <CartList cart={cart} setCart={setCart} />
        <CartTotals   />
      </section>
    )
  } else {
    return <EmptyCart/>
  }
}

export default Cart