import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;