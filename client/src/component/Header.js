import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className="navigation">
        <ul className="menu-bar">
          <Link to="/"><li>Home</li></Link>
          <Link to="/menu"><li>Menu</li></Link>
          <Link to="/location"><li>Location</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
        <i className="fa-solid fa-cart-shopping"></i>
      </nav>
  )
}

export default Header