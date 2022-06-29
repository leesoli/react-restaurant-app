import React, {useContext, useState} from 'react'
import {Context} from "../Context"

export default function OrderItems ({item}) {

  const {addToCart} = useContext(Context)
  const [hovered, setHovered] = useState(false)


  return (
    <div
      className="order-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => addToCart(item)}
    >
      <span className="item-name">{item.name}</span>
      <span className="item-description">{item.description}</span>
      <span className="item-price">${item.price}</span>
      <img className="item-image" src={item.url}></img>
    </div>
  )
}