import React, { Component } from 'react';
import ContactForm from './components/Contact/ContactForm';

import ContactIntro from './components/Contact/ContactIntro';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <hr className="top"/>
        <ContactIntro />
        <hr className="bottom"/>
        <ContactForm />
      </div>
    )
  }
}
