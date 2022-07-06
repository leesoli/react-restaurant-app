import React, {useContext} from 'react'
import {Context} from '../Context'
import sobaPhoto from '../images/fidel-fernando-val59UQ3PqU-unsplash.jpg'
import MenuItem from '../component/Menu-items'

export default function Menu() {
  const {orderItems} = useContext(Context);

  const appetizers = orderItems.filter(item => item.category === 'appetizers');

  const coldNoodles = orderItems.filter(item => item.category === 'cold noodles');

  const donburi = orderItems.filter(item => item.category === 'donburi');

  function renderMenuItem(category) {
    return orderItems.filter(item => item.category === category).map(item => <MenuItem item={item} key={item.id}/>)
  }

  return (
    <div className="menu-page">
      <img className="menu-photo" src={sobaPhoto}></img>
      <div className="menu-container">
        <section className="menu-appetizer">
          <h3 className="menu-category">Appetizer</h3>
          {renderMenuItem("appetizers")}
        </section>

        <section className="menu-cold-noodles">
          <h3 className="menu-category">Cold Noodles</h3>
          {renderMenuItem("cold noodles")}
        </section>

        <section className="menu-donburi">
          <h3 className="menu-category">Donburi</h3>
          {renderMenuItem("donburi")}
        </section>
      </div>
    </div>
  )
}