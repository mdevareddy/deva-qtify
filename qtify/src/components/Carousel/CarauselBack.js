import React from "react";
import { useSwiper } from "swiper/react";
import Button from "../Button/Button";
import { MdOutlineArrowBackIos } from "react-icons/md";
function CarouselBack({ className }) {
  const swiper = useSwiper();
  const classes = className
    ? `btn-carousel prev ${className}`
    : `btn-carousel prev`;

  return (
    <Button
      onClick={() => {
        swiper.slidePrev();
      }}
      primary
      className={`${classes}`}
    >
      <MdOutlineArrowBackIos />
    </Button>
  );
}

export default CarouselBack;
