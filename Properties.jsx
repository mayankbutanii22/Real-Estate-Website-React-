import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Properties.module.css';

const Properties = () => {
  const { properties } = useSelector((state) => state.property);

    const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.properties}>
      <h1>All Properties</h1>
       <div className={styles.searchWrapper}>
  <img src="https://img.icons8.com/ios7/600/search.png" alt="Search" className={styles.searchIcon} />
  <input
    type="text"
    placeholder="Search by title or location"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className={styles.searchInput}
  />
</div>

      <div className={styles.grid}>
        {filteredProperties.map((p) => (
          <Link to={`/property/${p.id}`} key={p.id} className={styles.card}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.price}</p>
            <span>{p.location}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Properties;