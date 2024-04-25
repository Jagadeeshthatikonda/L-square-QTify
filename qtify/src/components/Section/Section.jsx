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
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {isSectionExpanded ? "Show All" : "Collapse All"}
        </h4>
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
