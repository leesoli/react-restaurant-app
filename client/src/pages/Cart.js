import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import CartItems from '../component/Cart-items'
import CheckoutItems from '../component/Checkout-items.js'

export default function Cart() {
  const {cartItems, total} = useContext(Context)

  const taxes = total * 0.0825
  const grandTotal = total + taxes

  const cart = cartItems.map(item => (
    <CartItems item={item} key={item.id} />
  ))

  const checkout = cartItems.map(item => (
    <CheckoutItems item={item} key={item.id} />
  ))

  return (
    <main className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-container">
        {cart}
      </div>
      <div className="checkout-container">
        <h2>Your order</h2>
        <div className="checkout-summary">
          <span>Item</span>
          <span className="right-align">Price</span>
          <span className="right-align">Qty</span>
          <span className="right-align">Total</span>
        </div>
        {checkout}

        <div className="total-summary">
          <h3 className="subtotal-title">Subtotal</h3>
          <h3 className="checkout-subtotal">{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
          <h3 className="taxes-title">Taxes</h3>
          <h3 className="checkout-taxes">{taxes.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
          <h3 className="total-title">Total</h3>
          <h3 className="checkout-total">{grandTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
        </div>
      </div>

      <button className="checkout-btn">Checkout</button>
    </main>
  )
}