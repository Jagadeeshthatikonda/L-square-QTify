import React from "react";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";
import styles from "./RightNavigationIcon.module.css";

const RightNavigationIcon = () => {
  const swiper = useSwiper();
  const [lastCardNotSwiped, setLastCardNotSwiped] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setLastCardNotSwiped(swiper.isEnd);
    });
  });
  return (
    <div className={styles.moveToRight}>
      {!lastCardNotSwiped && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default RightNavigationIcon;
