import React from "react";
import styles from "./CardsGrid.module.css";
import Cards from "../Cards/Cards";

function CardsGrid({ data, className, cardType, ...props }) {
  const classes = className
    ? `${styles.flexWrap} ${styles.container} ${className}`
    : `${styles.flexWrap} ${styles.container}`;

  return (
    <div className={`${classes}`} {...props}>
      {data.map((item) => {
        return <Cards key={item.id} cardData={item} type={cardType} />;
      })}
    </div>
  );
}

export default CardsGrid;
