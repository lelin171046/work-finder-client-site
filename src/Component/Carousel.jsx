import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bgimg1 from '../assets/images/carousel1.jpg'
import bgimg2 from '../assets/images/carousel2.jpg'
import bgimg3 from '../assets/images/carousel3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='container px-6 py10 mx-auto'>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><Slider image={bgimg1} text={'Instant Solutions For All Your Projects—Hire Experts In Just One Minute.'}></Slider></SwiperSlide>
        <SwiperSlide><Slider image={bgimg2} text={'Find The Right Freelancer And Get The Job Done In Record Time'}></Slider></SwiperSlide>
        <SwiperSlide><Slider image={bgimg3} text={'Connect With Skilled Professionals And Watch Your Work Get Done In A Flash'}></Slider></SwiperSlide>
        
       
        
        <div className="autoplay-progress" slot="container-end">
          
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
