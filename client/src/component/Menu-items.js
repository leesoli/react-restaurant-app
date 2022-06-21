import React from 'react'
import imagePhoto from '../images/menu/ten-zaru.jpg'

export default function MenuItems (props) {

  return (
    <div className="menu-item">
      <h3 className="item-name">{props.item.name}</h3>
      <p className="item-description">{props.item.description}</p>
      <h4 className="item-price">{props.item.price}</h4>
      <img className="item-image" src={imagePhoto}></img>
    </div>
  )
}