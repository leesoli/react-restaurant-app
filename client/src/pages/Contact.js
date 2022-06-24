import React, {useState, useContext} from 'react'

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
      <h2>Contact us</h2>
      <p className="contact-info">For store/business inquiries,
        <br></br>
        contact <a href="/">tanakaya@gmail.com</a> or fill out the form with contact information.
      </p>
      <form onSubmit={(e) => submitForm(e, form)}>

        <input
          id="firstName"
          required
          placeholder="First Name"
          type="text"
          onChange={handleChange}
          name="firstName"
          value={form.firstName}
        ></input>

        <input
          id="lastName"
          required
          placeholder="Last Name"
          type="text"
          onChange={handleChange}
          name="lastName"
          value={form.lastName}
        ></input>

        <input
          id="email"
          required
          placeholder="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={form.email}
        ></input>

        <input
          id="subject"
          placeholder="Subject"
          type="text"
          onChange={handleChange}
          name="subject"
          value={form.subject}
        ></input>

        <textarea
          id="message"
          required
          placeholder="Message"
          type="textarea"
          onChange={handleChange}
          name="message"
          value={form.message}
        ></textarea>

        <button className="submit-btn">Submit</button>
      </form>
    </main>
  )
}