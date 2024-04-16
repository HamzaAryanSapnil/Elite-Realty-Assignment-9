// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full w-full rounded-xl"
      >
        <SwiperSlide className="w-full h-full" >
          <img
            className="w-full h-full flex justify-center items-center "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUUq-HB-iCNzmz3zsm0OSFsy7X0tEy1iTSBIRZupKAg&s"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full" >
          <img
            className="w-full h-full flex justify-center items-center "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUUq-HB-iCNzmz3zsm0OSFsy7X0tEy1iTSBIRZupKAg&s"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full" >
          <img
            className="w-full h-full flex justify-center items-center "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUUq-HB-iCNzmz3zsm0OSFsy7X0tEy1iTSBIRZupKAg&s"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
