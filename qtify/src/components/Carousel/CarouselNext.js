import React from "react";
import { useSwiper } from "swiper/react";
import Button from "../Button/Button";
import { MdOutlineArrowForwardIos } from "react-icons/md";
function CarouselNext({ className }) {
  const swiper = useSwiper();
  const classes = className
    ? `btn-carousel next ${className}`
    : `btn-carousel next`;

  return (
    <Button
      onClick={() => {
        // console.log(swiper.eventsListeners, swiper.slideNext);
        swiper.slideNext();
      }}
      primary
      className={`${classes}`}
    >
      <MdOutlineArrowForwardIos />
    </Button>
  );
}

export default CarouselNext;
