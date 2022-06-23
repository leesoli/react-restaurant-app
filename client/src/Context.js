import React, {useState, useEffect} from 'react'
import data from './data.json'

const Context = React.createContext()

function ContextProvider ({children}) {
  const [cartItems, setCartItems] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [total, setTotal] = useState(0)


  useEffect(() => {
    //get data from api
    setMenuItems(data)
  }, [])

  useEffect(() => {
    //updates total when cart items are updated
    setTotal(findTotal())
  }, [cartItems])

  function updateCart(id, value) {
    setCartItems(prevState =>
      prevState.map(item => {
        if (item.id === Number(id)) {
          return ({...item, count: value})
        } else {
          return item
        }
    }))
  }

  function addToCart (itemObj) {
    const index = cartItems.findIndex(item => item.id === itemObj.id)
    if (index === -1) {
      setCartItems(prevState => ([...prevState, {...itemObj, count: 1}]))
    } else if (index >= 0) {
      updateCart(itemObj.id, Number(cartItems[index].count) + 1)
    }
  }

  function removeFromCart (id, item) {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== id)
    setCartItems(updatedCart)
  }

  function findTotal() {
    let sum = cartItems.reduce((prev, curr) => prev + curr.count * curr.price, 0)
    return sum
  }


  return (
  <Context.Provider value={{cartItems, menuItems, total, addToCart, removeFromCart, updateCart, findTotal}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
