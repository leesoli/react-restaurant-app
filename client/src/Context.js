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

  return (
  <Context.Provider value={{cartItems, menuItems, addToCart}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
