import React, {useState, useContext} from 'react'
import noodles from '../images/noodles.jpg'
import {Context} from '../Context'

export default function Contact () {
  const {submitForm} = useContext(Context)

  const [form, updateForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  function handleChange(e) {
    const {name, value} = e.target
    updateForm(prevState=> ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <main className="contact-page">
      <div className="contact-info-container">
        <div className="contact-info">
          <h2 className="contact-info-title">Location</h2>
          <span>1234 Elaine Blvd</span>
          <span>Irvine, CA 92602</span>


          <h2 className="contact-info-title">Hours</h2>
          <span>Mon-Fri: 11am-2:30pm/ 5pm-10pm</span>
          <span>Sat: 5pm-2am</span>
          <span>Sun: Closed</span>

          <h2 className="contact-info-title">Contact</h2>
          <span>Jane Doe</span>
          <span>(123) 456-7890</span>
        </div>
        <img className="contact-img" src={noodles}></img>
      </div>

      <div className="contact-additional">
        <div className="form-align">
          <p className="contact-add-info">For store/business inquiries,<br></br> email <a className="contact-email" href="/">mazesoba@gmail.com</a> or submit your information below.
          </p>
          <form onSubmit={(e) => submitForm(e, form)}>
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              required
              type="text"
              onChange={handleChange}
              name="firstName"
              value={form.firstName}
            ></input>

            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              required
              type="text"
              onChange={handleChange}
              name="lastName"
              value={form.lastName}
            ></input>

            <label htmlFor="email">Email *</label>
            <input
              id="email"
              required
              type="email"
              onChange={handleChange}
              name="email"
              value={form.email}
            ></input>

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              onChange={handleChange}
              name="subject"
              value={form.subject}
            ></input>

            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              required
              type="textarea"
              onChange={handleChange}
              name="message"
              value={form.message}
            ></textarea>

            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </main>
  )
}