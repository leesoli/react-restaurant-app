import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import OurStory from '../pages/OurStory'
import Contact from '../pages/Contact'
import Footer from './Footer'
import Cart from '../pages/Cart'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/story" element={<OurStory />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}
