import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./carousel.css";
import "swiper/css";
// import "swiper/swiper.min.css";
import Cards from "../Cards/Cards";

import { Navigation } from "swiper";

import CarouselNext from "./CarouselNext";
import CarouselBack from "./CarauselBack";
import { useEffect, useState } from "react";

// const ButtonNext = () => {
//   const swiper = useSwiper();
//   return (
//     <Button
//       onClick={() => swiper.slideNext()}
//       primary
//       className={"btn-carousel next"}
//     >
//       <MdOutlineArrowForwardIos />
//     </Button>
//   );
// };
// const ButtonPrev = () => {
//   const swiper = useSwiper();
//   return (
//     <Button
//       onClick={() => swiper.slidePrev()}
//       primary
//       className={"btn-carousel prev"}
//     >
//       <MdOutlineArrowBackIos />
//     </Button>
//   );
// };

function Carousel({ data, cardType, changeSong }) {
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [navBtnClass, setNavBtnClass] = useState({
    prev: "disabled",
    next: "",
  });

  useEffect(() => {
    // console.log(swiperInstance);
    if (swiperInstance) swiperInstance.slideTo(0);
  }, [data]);

  const swiper = useSwiper();
  // console.log(swiper);
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        onReachEnd={() => {
          if (data.length) setNavBtnClass({ prev: "", next: "disabled" });
        }}
        onReachBeginning={() => {
          setNavBtnClass({ prev: "disabled", next: "" });
        }}
        onFromEdge={() => {
          setNavBtnClass({ prev: "", next: "" });
        }}
        slidesPerView={"auto"}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        {/* <ButtonNext />
        <ButtonPrev /> */}
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Cards changeSong={changeSong} cardData={item} type={cardType} />
            </SwiperSlide>
          );
        })}
        <CarouselBack className={navBtnClass.prev} />
        <CarouselNext className={navBtnClass.next} />
      </Swiper>
    </div>
  );
}

export default Carousel;
