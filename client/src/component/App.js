import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import Order from '../pages/Order'
import OurStory from '../pages/OurStory'
import Contact from '../pages/Contact'
import Footer from './Footer'
import Cart from '../pages/Cart'
import Menu from '../pages/Menu'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/story" element={<OurStory />}/>
        <Route path="/order" element={<Order />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}
