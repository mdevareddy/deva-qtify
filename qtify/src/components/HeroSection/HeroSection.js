import React from "react";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div className={styles["hero-section"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-text"]}>
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <div className={styles["hero-image"]}>
          <img src={require("../../assets/hero-image.png")} alt="hero" />
        </div>
      </div>
    </div>
  );
};
