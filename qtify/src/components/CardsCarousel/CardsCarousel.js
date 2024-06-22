import React from "react";
import styles from "./CardsCarousel.module.css";
import Carousel from "../Carousel/Carousel";

function CardsCarousel({ data, className, cardType, changeSong, ...props }) {
  const classes = className
    ? `${styles.container} ${className}`
    : `${styles.container}`;

  return (
    <div className={`${classes}`} {...props}>
      <Carousel data={data} cardType={cardType} changeSong={changeSong} />
    </div>
  );
}

export default CardsCarousel;
