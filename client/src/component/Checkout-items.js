import React from 'react'

export default function CheckoutItems({item}) {

  return (
    <div className="checkout-summary">
      <span>{item.name}</span>
      <span className="right-align">${item.price}</span>
      <span className="right-align">{item.count}</span>
      <span className="right-align">{(item.count * item.price).toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
    </div>
  )
}