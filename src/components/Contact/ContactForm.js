import React, { Component, useRef } from 'react';
import './ContactForm.css'
import emailjs from 'emailjs-com';

export default function ContactForm() {
      const form = useRef();
      const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('gmail', 'template_u7hqsni', form.current, 'user_M1bg3x0G8QOErF4c68Woz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
      <div className="ContactForm">
        <div className="FormTitle">
          <h1>Contact Me</h1>
        </div>
        <div className="Form">
          <form ref={form} onSubmit={sendEmail}>

            <div className="form-group">
                <label for="exampleFormControlSelect1">Name</label>
                <input type="text" class="form-control" size="60" placeholder="Name" name='name'/>
              </div>

              <div className="form-group">
                <label for="exampleFormControlSelect1">Subject</label>
                <input type="text" class="form-control" size="60" placeholder="Subject" name='subject'/>
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" placeholder="Email" name='email'/>
              </div>
      
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" rows="3" name='message'></textarea>
              </div>
              <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    );
  };
