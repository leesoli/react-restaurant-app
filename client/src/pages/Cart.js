import React, {useContext} from 'react'
import {Context} from '../Context'
import CartItems from '../component/Cart-items'

export default function Cart() {
  const {cartItems} = useContext(Context)
  console.log(cartItems, 'cart items')
  const cart = cartItems.map(item => (
    <CartItems item={item} key={item.id} />
  ))

  return (
    <main className="cart-container">
      {cart}
    </main>
  )
}