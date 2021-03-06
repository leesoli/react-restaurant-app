import React from "react";
import restaurantPhoto from "../../../images/restaurant.jpg";
import chefPhoto from "../../../images/gabriel-forsberg-9sM53e9wTTY-unsplash.jpg";
import restaurantExteriorPhoto from "../../../images/kris-sevinc-NVX55qVyEkE-unsplash.jpg";

export default function OurStory () {
  return (
    <main className="story-page">
      <img className="story-img" src={restaurantPhoto} alt="view of restaurant bar and kitchen"></img>

      <div className="story-container">
        <div className="story-info">
          <h1 className="story-title">Our story</h1>
          <p className="story-paragraph-1">Makisoba started in 1965 by a young couple who loved to cook and serve others. Julia and Peter, whom are now retired, have passed down their recipe and family-owned business to their children, Janette and Lowry.
          </p>
          <p className="story-paragraph-2">Since our establishment in 1965, the store motto has always been <strong>cook freshly once ordered</strong>. Our philosophy is to be a store that is loved by all, immersed in hospitality</p>
        </div>

        <div className="story-img-container">
          <img className="story-img-1" src={chefPhoto} alt="chef cooking a yakitori"></img>
          <img className="story-img-2" src={restaurantExteriorPhoto} alt="outside view of the restaurant"></img>
        </div>
      </div>
    </main>
  )
}