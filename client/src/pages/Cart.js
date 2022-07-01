import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import CartItems from '../component/Cart-items'
import CheckoutItems from '../component/Checkout-items.js'

export default function Cart() {
  const {cartItems, total} = useContext(Context)

  const cart = cartItems.map(item => (
    <CartItems item={item} key={item.id} />
  ))

  return (
    <main className="cart-page">
      <section className="shopping-cart-container">
        <span className="cart-title">Shopping Cart</span>
        <div className="cart-container">
          {cart}
        </div>
      </section>

      <section className="checkout-container">
          <span>Subtotal</span>
          <span className="checkout-subtotal">{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
      </section>

      <button className="checkout-btn">Checkout</button>
    </main>
  )
}