import React, { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage ] = useState('');

  const onSubmit = () => {
    axios.post('http://localhost:3000/mailer', { email, name, message });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={(e) => { setName(e.target.value)}} value={name} />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={(e) => { setEmail(e.target.value)}} value={email} />
        <label htmlFor="message">Message:</label>
        <textarea 
          name="message" 
          id="message" 
          cols="30" 
          rows="10" 
          onChange={(e) => { setMessage(e.target.value)}}             
          value={message}
        >
        <input type="submit" value="Submit"/>
        </textarea>
      </form>
    </div>
  )
}
