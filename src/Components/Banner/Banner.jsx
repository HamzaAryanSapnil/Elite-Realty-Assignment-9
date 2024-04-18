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
    <div className="w-full h-96 md:h-[700px] mt-20 lg:mt-0">
       
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
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
      >
        
        {bannerImg.map((banner) => (
          <SwiperSlide key={banner.id}
          style={{
            'background-image':`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.image_url})`,
          }}
          data-swiper-parallax="-23%"
          >
            {/* <img src={banner.image_url} alt="" /> */}
            <div className=" flex flex-col justify-end items-start h-full p-10" >
            <h3 className="text-3xl md:text-5xl font-bold text-white font-mulish" >{banner.estate_title}</h3>
            
            <p className="text-white font-manrope font-extralight md:w-5/12" >{banner.description.length > 150 ? banner.description.slice(0, 150) : banner.description}</p>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default Banner;
