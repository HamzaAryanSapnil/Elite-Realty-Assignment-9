// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Banner = () => {
  const  [bannerImg, setBannerImg] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBannerImg(data));
  
    
  }, [])
  console.log(bannerImg);
  return (
    <div className="w-full h-[700px]">
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
        {bannerImg.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img src={banner.image_url} className="w-full h-full rounded-xl" alt="" />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default Banner;
