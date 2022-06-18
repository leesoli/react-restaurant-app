import React from 'react'
import restaurantPhoto from '../images/restaurant-photo.jpg'

export default function Home () {

  const styles = {
    backgroundImage: `url(${restaurantPhoto})`
  }
  return (
    <div className="homepage" style={styles} >
      {/* <img
        className="homepage-image"
        src={restaurantPhoto}
        alt="Original Tanakaya location 20 years ago"
      ></img> */}

    </div>
  )
}