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
  }, [swiper]);

  return lastCardNotSwiped ? null : (
    <div className={styles.moveToRight}>
      <RightArrow onClick={() => swiper.slideNext()} />
    </div>
  );
};

export default RightNavigationIcon;
