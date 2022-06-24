import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className="navigation">
        <ul className="menu-bar">
          <Link to="/"><li>Home</li></Link>
          <Link to="/menu"><li>Menu</li></Link>
          <Link to="/story"><li>Our Story</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </nav>
  )
}

export default Header