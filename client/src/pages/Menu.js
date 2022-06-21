import React from 'react'
import MenuItems from '../component/Menu-items'
import data from '../data.json'

export default function Menu () {
  const menuItems = data.map((item, index) => (
    <MenuItems item={item} key={index} />
  ))
  return (
    <main className="menu-container ">
      {menuItems}
    </main>
  )
}