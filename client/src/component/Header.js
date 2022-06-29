import React from 'react'
import {Link} from 'react-router-dom'
import {IconContext} from "react-icons";
import {RiShoppingCartLine} from "react-icons/ri";
import {GiFlowerEmblem} from "react-icons/gi";

function Header() {
  const color = '#001c40'
  const styles = {
      border: `3px solid ${color}`,
      borderRadius: '50%'
  }

  function handleClick() {
    document.body.classList.toggle('nav-open');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
  }

  return (
    <div>
    <header>
    <button className="nav-toggle" onClick={handleClick}>
      <span className="hamburger"></span>
    </button>
    <div className="logo-container">
      <GiFlowerEmblem
        style={styles}
      />
      <div className="logo-name">Mazesoba</div>
    </div>
    </header>


      <nav className="nav">
      <ul className="navlist">
        <Link to="/"><li onClick={closeNav}>Home</li></Link>
        <Link to="/order"><li onClick={closeNav}>Order</li></Link>
        <Link to="/menu"><li onClick={closeNav}>Menu</li></Link>
        <Link to="/story"><li onClick={closeNav}>Our Story</li></Link>
        <Link to="/contact"><li onClick={closeNav}>Contact Us</li></Link>
      </ul>
      </nav>
      <Link to="/cart">
        <IconContext.Provider value={{
            color,
            size: '1.75rem',
            className:"cart-icon"
          }}>
          <div>
            <RiShoppingCartLine />
          </div>
        </IconContext.Provider>
      </Link>
      </div>
  )
}

export default Header