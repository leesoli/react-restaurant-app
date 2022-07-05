import React from 'react'
import restaurantPhoto from '../images/restaurant.jpg'
import image1 from '../images/gabriel-forsberg-9sM53e9wTTY-unsplash.jpg'
import image2 from '../images/kris-sevinc-NVX55qVyEkE-unsplash.jpg'

export default function OurStory () {
  return (
    <main className="story-page">
      <img
        className="story-img"
        src={restaurantPhoto}></img>

      <div className="story-container">
        <div className="story-info">
          <h1 className="story-title">Our story</h1>
          <p className="story-paragraph-1">Makisoba started in 1965 by a young couple who loved to cook and serve others. Julia and Peter, whom are now retired, have passed down their recipe and family-owned business to their children, Janette and Lowry.
          </p>

          <p className="story-paragraph-2">Since our establishment in 1965, the store motto has always been <strong>cook freshly once ordered</strong>. Our philosophy is to be a store that is loved by all, immersed in hospitality</p>
        </div>

        <div className="story-img-container">
          <img className="story-img-1" src={image1}></img>
          <img className="story-img-2" src={image2}></img>
        </div>
      </div>

    </main>
  )
}