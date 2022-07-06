import React from "react";

export default function MenuItem(props) {
  return (
    <div className="menu-item-container" key={props.item.id}>
      <span className="menu-item-name">{props.item.name}  ﹣  ${props.item.price}</span>
      <span className="menu-item-description">{props.item.description}</span>
    </div>
  )
}