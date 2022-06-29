import React from 'react'
import {Link} from 'react-router-dom'

export default function Home () {

  return (
    <main className="homepage">

      <Link to="/order"><button className="order-btn">Place Order</button></Link>

    </main>
  )
}