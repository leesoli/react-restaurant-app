import React, {useContext, useState} from 'react'
import imagePhoto from '../images/menu/ten-zaru.jpg'
import {Context} from "../Context"

export default function CartItems ({item}) {

  const [isHovered, setHoveredState] = useState(false)

  return (
    <div className="menu-item">
      <h3 className="item-name">{item.name}</h3>
      <p className="item-description">{item.description}</p>
      <h4 className="item-price">{item.price}</h4>
      <img className="item-image" src={imagePhoto}></img>
      {/* add remove button */}
    </div>
  )
}