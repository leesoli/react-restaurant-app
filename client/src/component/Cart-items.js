import React, {useContext, useState} from 'react'
import imagePhoto from '../images/menu/ten-zaru.jpg'
import {Context} from "../Context"

export default function CartItems ({item}) {
  const {removeFromCart} = useContext(Context)
  const [isHovered, setHoveredState] = useState(false)

  return (
    <div className="cart-item">
      <h3 className="cart-item-name">{item.name}</h3>
      <h4 className="cart-item-price">{item.price}</h4>
      <img className="cart-item-image" src={imagePhoto}></img>
      <div
        onClick={() => removeFromCart(item.id)}
        className="cart-item-btn"
      >Remove</div>
    </div>
  )
}