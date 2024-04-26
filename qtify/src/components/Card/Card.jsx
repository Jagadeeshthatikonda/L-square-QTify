import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const { image, follows, title, likes } = data;

  return (
    <Tooltip title={title ? `${title} songs` : ``} placement="top" arrow>
      <div className={styles.cardContainer} title={title}>
        <div className={styles.card}>
          <img src={image} alt={title} className={styles.cardImage} />
          <div className={styles.followsContainer}>
            <Chip
              label={follows ? `${follows} Follows` : `${likes} Likes`}
              className={styles.chip}
              size="small"
            />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    </Tooltip>
  );
};

export default Card;
