import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const { properties } = useSelector((state) => state.property);
  const [searchTerm, setSearchTerm] = useState("");

  // Optional: Filter properties based on search
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Find Your Dream Home</h1>
        <img src="https://img.icons8.com/ios7/600/search.png" alt="Search" className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search by title or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <section className={styles.featured}>
        <h2>Featured Properties</h2>
        <div className={styles.grid}>
          {filteredProperties.map((property) => (
            <Link
              to={`/property/${property.id}`}
              key={property.id}
              className={styles.card}
            >
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.price}</p>
              <span>{property.location}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;




