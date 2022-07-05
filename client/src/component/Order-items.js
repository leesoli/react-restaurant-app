import React, {useContext, useState, useEffect} from 'react'
import {Context} from "../Context"

export default function OrderItems ({item}) {

  const {addToCart} = useContext(Context)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  function handleClick () {
    setClicked(true)
  }

  useEffect(() => {
    if (clicked === true) {
      setTimeout(() => setClicked(false), 1000)
    }
  }, [clicked])

  return (
    <div className="order-item">
      <span className="item-name">{item.name}</span>
      <span className="item-description">{item.description}</span>
      <span className="item-price">${item.price}</span>
      <img className="item-image" src={item.url}></img>

    {clicked ?
      <button className="added-cart-btn"><i class="fa-solid fa-circle-check"></i> Added to cart</button>:
      <button
        className="cart-btn-hover cart-btn"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          addToCart(item)
          handleClick()
        }}>
          <span>Add to cart</span>
          <i class="fa fa-shopping-cart"></i>
      </button>}

    </div>
  )
}