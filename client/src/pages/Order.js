import React, {useContext, useState, useEffect} from 'react'
import OrderItems from '../component/Order-items'
import {Context} from "../Context"

export default function Order () {

  const {orderItems} = useContext(Context)
  const [category, changeCategory] = useState('all')
  const [catItems, setCategoryItems] = useState([])

  useEffect(() => {
    setCategoryItems(orderItems)
  }, [])

  useEffect(()=> {
  }, [catItems])

  function handleClick(cat) {
    changeCategory(cat)
    setCategoryItems(orderItems.filter(item => item.category === cat))
  }

  function renderItems() {
    if (category === 'all') {
      return orderItems.map(item => {
        return (
          <OrderItems item={item} key={item.id} />
        )
      })
    } else {
      return catItems.map(item => {
        return (
          <OrderItems item={item} key={item.id} />
        )
      })
    }
  }

  return (
    <main className="order-page">
      <div className="order-category">
        <span
          className="category-items"
          onClick={() => handleClick("all")}
        >All </span>
        <span
          className="category-items"
          onClick={() => handleClick("appetizers")}
          >Appetizers </span>
        <span
          className="category-items"
          onClick={() => handleClick("donburi")}
        >Donburi</span>
        <span
          className="category-items"
          onClick={() => handleClick("cold noodles")}
        >Cold Noodles</span>
      </div>
      <div className="order-container">
      {renderItems()}
      </div>
    </main>
  )
}