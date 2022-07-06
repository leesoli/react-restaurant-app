import React, {useContext} from "react";
import {Context} from "../Context";
import sobaPhoto from "../images/fidel-fernando-val59UQ3PqU-unsplash.jpg";
import MenuItem from "../component/Menu-items";

export default function Menu() {
  const {orderItems} = useContext(Context);
  const appetizers = filterByCategory("appetizers");
  const coldNoodles = filterByCategory("cold noodles");
  const donburi = filterByCategory("donburi");

  function filterByCategory(categoryName) {
    return orderItems.filter(item => item.category === categoryName);
  }

  function renderMenuItems(categoryName) {
    return filterByCategory(categoryName).map(item => <MenuItem item={item} key={item.id}/>);
  }

  return (
    <div className="menu-page">
      <img className="menu-photo" src={sobaPhoto}></img>
      <div className="menu-container">
        <section className="menu-appetizer">
          <h3 className="menu-category">Appetizer</h3>
          {renderMenuItems("appetizers")}
        </section>

        <section className="menu-cold-noodles">
          <h3 className="menu-category">Cold Noodles</h3>
          {renderMenuItems("cold noodles")}
        </section>

        <section className="menu-donburi">
          <h3 className="menu-category">Donburi</h3>
          {renderMenuItems("donburi")}
        </section>
      </div>
    </div>
  )
}