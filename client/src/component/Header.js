import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {IconContext} from "react-icons";
import {RiShoppingCartLine, RiShoppingCartFill} from "react-icons/ri";
import {GiFlowerEmblem} from "react-icons/gi";
import {Context} from '../Context';

function Header() {
  const {cartItems} = useContext(Context);

  const color = '#040404';
  const styles = {
      border: `3px solid ${color}`,
      borderRadius: '50%'
  }

  window.addEventListener("resize", checkWindowSize)

  function checkWindowSize() {
    if (window.innerWidth >= 850) {
      closeNav()
    }
  }

  function handleClick() {
    document.body.classList.toggle('nav-open');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
  }

  return (
      <header>
        <button className="nav-toggle" onClick={handleClick}>
          <span className="hamburger"></span>
        </button>

        <nav className="large-screen-nav">
          <ul className="large-screen-navlist">
            <Link to="/"><li>Home</li></Link>
            <Link to="/order"><li>Order</li></Link>
            <Link to="/menu"><li>Menu</li></Link>
            <Link to="/story"><li>Our Story</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
          </ul>
        </nav>

        <div className="logo-container">
          <GiFlowerEmblem
            style={styles}
          />
          <div className="logo-name">Mazesoba</div>
        </div>
        <Link to="/cart">
        <IconContext.Provider value={{
            color,
            size: '1.75rem',
            className:"cart-icon"
          }}>
          <div>
            {cartItems.length > 0 ? <RiShoppingCartFill/>:<RiShoppingCartLine />}
          </div>
        </IconContext.Provider>
      </Link>
      <nav className="nav">
        <ul className="navlist">
          <Link to="/"><li onClick={closeNav}>Home</li></Link>
          <Link to="/order"><li onClick={closeNav}>Order</li></Link>
          <Link to="/menu"><li onClick={closeNav}>Menu</li></Link>
          <Link to="/story"><li onClick={closeNav}>Our Story</li></Link>
          <Link to="/contact"><li onClick={closeNav}>Contact Us</li></Link>
        </ul>
      </nav>
      </header>


  )
}

export default Header