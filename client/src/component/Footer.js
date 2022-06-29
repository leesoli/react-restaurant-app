import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-address">
          <h3 className="footer-title footer-logo">MAZESOBA</h3>
          <p>1234 Elaine Blvd
            <br></br>
            Irvine, CA 92602
            <br></br>
            (562) 123-4567
          </p>
        </div>

        <div className="footer-hours footer-title">
          <h3 className="footer-title hours">Store Hours</h3>
          <div className="footer-store-hours">
            <p className="day-row-1">Mon-Fri</p>
            <p className="hours-row-1">11:00 - 2:30<br></br>5 - 10pm</p>
            <p className="day-row-2">Sat</p>
            <p className="hours-row-2">5 - 2am</p>
            <p className="day-row-3">Sun</p>
            <p className="hours-row-3">Closed</p>
          </div>
        </div>

        <div className="footer-social">
          <h3 className="footer-title social">Get connected</h3>
          <div className="icon-container">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter-square"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>

      <p className="copyright">© 2022 Mazesoba</p>
    </footer>

  )
}