import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Location from '../pages/Location'
import Contact from '../pages/Contact'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/location" element={<Location />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}
