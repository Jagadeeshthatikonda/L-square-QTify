import React from "react";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";
import styles from "./LeftNavigationIcon.module.css";

const LeftNavigationIcon = () => {
  const swiper = useSwiper();
  const [firstCardNotSwiped, setFirstCardNotSwiped] = useState(
    swiper.isBeginning
  );

  useEffect(() => {
    swiper.on("slideChange", () => {
      setFirstCardNotSwiped(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.moveToLeft}>
      {!firstCardNotSwiped && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default LeftNavigationIcon;
