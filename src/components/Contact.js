import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import MAIL_SERVICE from './../services/mail'

import './contact.css'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage ] = useState('');
  const [notification, setNotification] = useState(undefined);
  const [inProp, setInProp] = useState(false);
  const [inNotification, setInNotification] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await MAIL_SERVICE.sendMail({ email, name, message });
      setNotification('Your message was sent');
      setInNotification(true);
    } catch (e) {
      setNotification('There was a problem with the server, please try again.');
      setInNotification(true);
    }
  };

  return (
    <TransitionGroup>
      <CSSTransition in={inProp} timeout={250} classNames="section">
        <div className="section-container contact">
          <div>
            <h2>Contact me</h2>
            <p>If you want to get in touch with me, please fill the from below. I will get in contact as soon as I can.</p>
          </div>
          <form onSubmit={onSubmit}>
            <CSSTransition in={inNotification} timeout={200} classNames="notification">
              <div>{notification}</div>
            </CSSTransition>
            <label htmlFor="name">Name:</label>
            <div>
              <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} value={name} />
            </div>
            <label htmlFor="email">Email:</label>
            <div><input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} value={email} /></div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={(e) => { setMessage(e.target.value) }}
              value={message}
            >
            </textarea>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>   
      </CSSTransition>
    </TransitionGroup>
  )
}
