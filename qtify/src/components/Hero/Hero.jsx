import React from "react";
import HeroImage from "../../assets/vibrating-headphone.png";
import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.sectionContainer}>
    <div className={styles.heroDescriptionText}>
      <h1>100 Thousand Songs, ad-free</h1>
      <h1>Over thousands podcast episodes</h1>
    </div>
    <img className={styles.HeroImage} src={HeroImage} alt="headphone" />
  </section>
);

export default Hero;
