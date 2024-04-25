import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

const Card = ({ data, type }) => {
  const { image, follows, title } = data;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={image} alt="album" className={styles.cardImage} />
        <div className={styles.followsContainer}>
          <Chip
            label={`${follows} Follows`}
            className={styles.chip}
            size="small"
          />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
