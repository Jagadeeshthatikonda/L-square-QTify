import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({
  title,
  data,
  type,
  customClassName,
  renderCustomCardsListHeader,
  shouldShowExpandAction = true,
}) => {
  const [isSectionExpanded, setIsSectionExpanded] = useState(true);

  const handleSectionToggle = () => {
    setIsSectionExpanded(!isSectionExpanded);
  };

  const renderSectionHeader = () => (
    <div className={styles.sectionHeader}>
      <p className={styles.sectionTitle}>{title}</p>
      {shouldShowExpandAction ? (
        <p
          className={styles.sectionToggleTextStyles}
          onClick={handleSectionToggle}
        >
          {isSectionExpanded ? "Show All" : "Collapse All"}
        </p>
      ) : null}
    </div>
  );

  const renderCardsWithoutCarousel = () => (
    <div className={styles.wrapper}>
      {data.map(card => (
        <Card data={card} type={type} key={card.id} />
      ))}
    </div>
  );

  const renderCardsWithCarousel = () => (
    <Carousel
      data={data}
      renderCard={data => <Card data={data} type={type} />}
    />
  );

  return (
    <div className={customClassName}>
      {renderSectionHeader()}
      {renderCustomCardsListHeader ? renderCustomCardsListHeader() : null}
      <div className={styles.cardWrapper}>
        {!isSectionExpanded
          ? renderCardsWithoutCarousel()
          : renderCardsWithCarousel()}
      </div>
    </div>
  );
};

export default Section;
