import React, {useContext} from 'react'
import MenuItems from '../component/Menu-items'
import {Context} from "../Context"


export default function Menu () {

  const {menuItems} = useContext(Context)

  const menu = menuItems.map(item => (
    <MenuItems item={item} key={item.id}/>
  ))
  return (
    <main className="menu-container">
      {menu}
    </main>
  )
}