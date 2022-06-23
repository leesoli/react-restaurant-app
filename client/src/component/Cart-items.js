import React, {useContext, useState} from 'react'
import imagePhoto from '../images/menu/ten-zaru.jpg'
import {Context} from "../Context"

export default function CartItems ({item}) {
  const {removeFromCart, updateCart} = useContext(Context)
  const [isHovered, setHoveredState] = useState(false)
  const [quantity, setQuantity] = useState(item.count)

  function changeQuantity(e) {
    const {name, value, id} = e.target;
    setQuantity(value)
    updateCart(id, value)
  }

  return (
    <div className="cart-item">
      <h3 className="cart-item-name">{item.name}</h3>
      <h4 className="cart-item-price">${item.price}</h4>
      <input
        type="number"
        id={item.id}
        className="cart-item-quantity"
        value={quantity}
        onChange={changeQuantity}
        min={1}
      ></input>
      <h4 className="cart-item-total">{(item.price * quantity).toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>
      <img className="cart-item-image" src={imagePhoto}></img>
      <div
        onClick={() => removeFromCart(item.id, item)}
        className="cart-item-btn"
      >Remove</div>
    </div>
  )
}