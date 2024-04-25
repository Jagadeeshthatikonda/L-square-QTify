import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

const Section = ({ title, data, type }) => {
  const [isSectionExpanded, setIsSectionExpanded] = useState(true);

  const handleToggle = () => {
    setIsSectionExpanded(!isSectionExpanded);
  };

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.leftTitle}>{title}</p>
        <p className={styles.toggleTextStyles} onClick={handleToggle}>
          {isSectionExpanded ? "Show All" : "Collapse All"}
        </p>
      </div>
      <div className={styles.cardWrapper}>
        {!isSectionExpanded ? (
          <div className={styles.wrapper}>
            {data.map(card => (
              <Card data={card} type={type} key={card.id} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Section;
