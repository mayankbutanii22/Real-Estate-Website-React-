// src/pages/PropertyDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './PropertyDetail.module.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const { properties } = useSelector((state) => state.property);
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <p>Property not found.</p>;

  return (
    <div className={styles.detailPage}>
      <img src={property.image} alt={property.title} className={styles.mainImage} />
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>{property.title}</h1>
          <p className={styles.description}>{property.description}</p>
          <h3 className={styles.price}>{property.price}</h3>
          <span className={styles.location}>{property.location}</span>
        </div>
        <div className={styles.right}>
          <h2>Contact Agent</h2>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Contact Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
