import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
import Order from "../pages/Order";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Footer from "./Footer";

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
