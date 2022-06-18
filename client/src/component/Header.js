import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className="header">
        <ul>
          <Link to="/"><li>Our Story</li></Link>
          <Link to="/menu"><li>Menu</li></Link>
          <Link to="/location"><li>Location</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header