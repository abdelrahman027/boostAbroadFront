"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const DestinationsCarousel = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get("https://abdelrahman0027.pythonanywhere.com/api/destinations/")
      .then((res) => {
        setDestinations(res.data.destinations);
      });
  }, []);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='relative'
    >
  
      {destinations.map(dest=>(


      <SwiperSlide className='relative z-20'>
        <div >
        <div className="absolute top-0 left-0 bg-blend-darken z-10 w-full h-full bg-[#0a0a0a47]"></div>
        <div className="absolute ml-2 mt-2 top-2 left-0 p-4 rounded-lg text-white font-semibold bg-[#0a0a0a80]">
        <h2 className=" text-3xl">{dest.Name}</h2>
        <h3>{dest.number}</h3>
        </div>
        <img
              src={dest.image}
              alt={dest.Name}
              className="object-cover rounded-lg h-[480px] w-[800px]"
            />
        </div>
            
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DestinationsCarousel;
