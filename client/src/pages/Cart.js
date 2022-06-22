import React, {useContext} from 'react'
import {Context} from '../Context'
import CartItems from '../component/Cart-items'

export default function Cart() {
  const {cartItems} = useContext(Context)

  const cart = cartItems.map(item => (
    <CartItems item={item} key={item.id} />
  ))

  return (
    <main className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-container">
        {cart}
      </div>
    </main>
  )
}