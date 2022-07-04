import React, {useContext, useState, useEffect} from 'react'
import {Context} from "../Context"
import {AiOutlineMinus, AiOutlinePlus, AiOutlineClose} from "react-icons/ai"

export default function CartItems ({item}) {
  const {removeFromCart, updateCart} = useContext(Context)
  const [isHovered, setHoveredState] = useState(false)
  const [quantity, setQuantity] = useState(item.count)

  function changeQuantity(e) {
    const {name, value, id} = e.target;
    setQuantity(value)
    updateCart(id, value)
  }

  function updateQuantity(id, value) {
    const result = Number(quantity) + value;
    if (result > 0) {
      setQuantity(result);
      updateCart(id, result)
    }
  }

  return (
    <div className="cart-item-container">

      <img className="cart-item-image" src={item.url}></img>

      <div className="cart-item-info">
        <span className="cart-item-name">{item.name}</span>
        <div className="item-quantity-container">
          < AiOutlineMinus
            className="cart-item-icon"
            onClick={() => updateQuantity(item.id, -1)}
          />
          <input
            type="text"
            id={item.id}
            className="cart-item-quantity"
            value={quantity}
            onChange={changeQuantity}
            min={1}
          ></input>
          <AiOutlinePlus
            className="cart-item-icon"
            onClick={() => updateQuantity(item.id, 1)}
          />
        </div>
        <span className="cart-item-total">{(item.price * quantity).toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>

        <AiOutlineClose
            onClick={() => removeFromCart(item.id, item)}
            className="cart-item-btn"
            size="1.75em"
        />

      </div>
    </div>
  )
}