import React, {useContext, useState} from 'react'
import imagePhoto from '../images/menu/ten-zaru.jpg'
import {Context} from "../Context"

export default function MenuItems ({item}) {

  const {addToCart} = useContext(Context)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="menu-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => addToCart(item)}
    >
      <h3 className="item-name">{item.name}</h3>
      <p className="item-description">{item.description}</p>
      <h4 className="item-price">${item.price}</h4>
      <img className="item-image" src={imagePhoto}></img>
      {hovered && <i className="fa-solid fa-cart-plus"></i>}
    </div>
  )
}