import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>DreamHomes</Link>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/properties" className={styles.navLink}>Properties</Link>
        <Link to="/agents" className={styles.navLink}>Agents</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

