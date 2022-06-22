import React, {useState, useEffect} from 'react'
import data from './data.json'

const Context = React.createContext()

function ContextProvider ({children}) {
  const [cartItems, setCartItems] = useState([])
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    //get data from api
    setMenuItems(data)
  }, [])

  function addToCart (item) {
    setCartItems(prevState => [item, ...prevState])
  }

  function removeFromCart (id) {
    const updatedCart = cartItems.filter(item => item.id !== id)
    console.log('id', id)
    console.log(updatedCart)
    setCartItems(updatedCart)
  }

  return (
  <Context.Provider value={{cartItems, menuItems, addToCart, removeFromCart}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
