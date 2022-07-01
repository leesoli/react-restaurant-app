import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import chefPhoto from '../images/mitya-ivanov-Pq64mh1H2WA-unsplash.jpg'
import sobaPhoto from '../images/charlesdeluvio-nAV0ojj-m4k-unsplash.jpg'
export default function Home () {

  return (
    <main className="homepage">
       <section className="homepage-newletter">
        <p>We will be closed on <strong>July 3-4th</strong> in observance of <strong>Independence Day</strong>.</p>
      </section>
      <section className="homepage-intro">
        <h2 className="homepage-intro-title">Traditional Japanese buckwheat noodles, made entirely from scratch.</h2>
        <img src={chefPhoto}></img>

        <div className="homepage-intro-column-2">
          <p>Nutty and earthy in flavor, soba noodles are made of buckwheat and are incredibly nutritious and healthy. Enjoy this simple dish anyway you like, hot or cold. Vegan or non-vegan, there's food for everyone!</p>
          <img src={sobaPhoto}></img>
        </div>
      </section>
      <section className="mini-menu-container">
        <h2>Some of Our Favorites</h2>
        <Link to="/menu"><a className="menu-link">See Full Menu</a></Link>
      </section>
      <section className="homepage-recruiting">
        <span>Join our team -</span>
        <h2>{`We're currently accepting resumes for assistant cook and server positions. `}
        <br></br>
          <Link to="/contact" className="recruiting-link">Reach out <BsArrowRight /></Link>
        </h2>
      </section>
    </main>
  )
}