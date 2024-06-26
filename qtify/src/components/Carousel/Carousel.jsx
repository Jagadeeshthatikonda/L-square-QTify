import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
import LeftNavigationIcon from "./LeftNavigationIcon/LeftNavigationIcon";
import RightNavigationIcon from "./RightNavigationIcon/RightNavigationIcon";

const Carousel = ({ data, renderCard }) => (
  <div className={styles.carouselContainer}>
    <Swiper
      initialSlide={0}
      slidesPerView={"auto"}
      spaceBetween={40}
      allowTouchMove
    >
      <LeftNavigationIcon />
      <RightNavigationIcon />
      {data.map(item => (
        <SwiperSlide key={item.id}>{renderCard(item)}</SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
