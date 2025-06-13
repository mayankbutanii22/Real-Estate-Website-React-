


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Footer.module.css';
import { subscribeNewsletter } from '../Redux/newsletterActions'; 

const Footer = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      dispatch(subscribeNewsletter(email));
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>DreamHomes</h3>
          <p>Your trusted real estate partner. Explore premium properties across the nation.</p>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/agents">Agents</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={styles.section}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} DreamHomes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

