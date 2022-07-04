import React, {useContext} from 'react'
import {Context} from '../Context'
import sobaPhoto from '../images/fidel-fernando-val59UQ3PqU-unsplash.jpg'

export default function Menu() {
  const {orderItems} = useContext(Context);

  const appetizers = orderItems.filter(item => item.category === 'appetizers')

  const coldNoodles = orderItems.filter(item => item.category === 'cold noodles')

  const donburi = orderItems.filter(item => item.category === 'donburi')

  function renderMenuItem(category) {
    return orderItems.filter(item => item.category === category).map(item => {
      return (
        <div className="menu-item-container" key={item.id}>
          <span className="menu-item-name">{item.name}  ﹣  ${item.price}</span>
          <span className="menu-item-description">{item.description}</span>
        </div>
      )
    })
  }

  return (
    <div className="menu-page">
      <img className="menu-photo" src={sobaPhoto}></img>
      <div className="menu-container">
        <h3 className="menu-category">Appetizer</h3>
          {renderMenuItem("appetizers")}
        <h3 className="menu-category">Cold Noodles</h3>
          {renderMenuItem("cold noodles")}
        <h3 className="menu-category">Donburi</h3>
          {renderMenuItem("donburi")}
      </div>
    </div>
  )
}