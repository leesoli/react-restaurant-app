import React from 'react'
import restaurantPhoto from '../images/restaurant-photo.jpg'
import {Link} from 'react-router-dom'

export default function Home () {

  const styles = {
    backgroundImage: `url(${restaurantPhoto})`,
    // backgroundBlendMode: 'multiply'
  }
  return (
    <main className="homepage" style={styles}>
      <h1 className="homepage-title">Summer Specials</h1>
      <Link to="/menu"><button className="order-btn">Place Order</button></Link>

    </main>
  )
}