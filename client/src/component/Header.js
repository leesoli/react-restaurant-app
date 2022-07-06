import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {IconContext} from "react-icons";
import {RiShoppingCartLine, RiShoppingCartFill} from "react-icons/ri";
import {GiFlowerEmblem} from "react-icons/gi";
import {Context} from '../Context';
import {setUnderline} from '../helper';

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
          <ul
           className="large-screen-navlist">
            <li
              className="navlist__home active"
              onClick={() => setUnderline('home')}
            >
              <Link to="/">Home</Link></li>
            <li
              className="navlist__order"
              onClick={() => setUnderline('order')}
            >
              <Link to="/order">Order</Link></li>
            <li
              className="navlist__menu"
              onClick={() => setUnderline('menu')}
            >
              <Link to="/menu">Menu</Link>
            </li>
            <li
              className="navlist__story"
              onClick={() => setUnderline('story')}
            >
              <Link to="/story">Our Story</Link>
            </li>
            <li
              className="navlist__contact"
              onClick={() => setUnderline('contact')}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
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
          <div onClick={() => setUnderline('')}>
            {cartItems.length > 0 ? <RiShoppingCartFill style={{color: '#AE524B'}}/>:<RiShoppingCartLine />}
          </div>
        </IconContext.Provider>
      </Link>
      <nav className="nav">
        <ul className="navlist">
          <li onClick={() => {
            setUnderline('home')
            closeNav()}}
          ><Link to="/">Home</Link></li>
          <li onClick={() => {
            setUnderline('order')
            closeNav()}}
          ><Link to="/order">Order</Link></li>
          <li onClick={() => {
            setUnderline('menu')
            closeNav()}}
          ><Link to="/menu">Menu</Link></li>
          <li onClick={() => {
            setUnderline('story')
            closeNav()}}
          ><Link to="/story">Our Story</Link></li>
          <li onClick={() => {
            setUnderline('contact')
            closeNav()}}
          ><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      </header>


  )
}

export default Header