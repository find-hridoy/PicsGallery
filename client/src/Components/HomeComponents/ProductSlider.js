import React from 'react';
import { NavLink } from 'react-router-dom';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

// install Swiper modules
SwiperCore.use([Navigation]);

const ProductSlider = ({ products }) => (
   <div className="productSlider">
      <Swiper
         spaceBetween={-60}
         slidesPerView={5}
         navigation
         //  pagination={{ clickable: true }}
         //  onSwiper={(swiper) => console.log(swiper)}
         //  onSlideChange={() => console.log('slide change')}
      >
         {products.map((image) => (
            <SwiperSlide key={image.id}>
               <NavLink to={`/images/${image.id}`}>
                  <img src={image.img} alt="img" />
               </NavLink>
            </SwiperSlide>
         ))}
         {/* {products.map((image) => (
            <SwiperSlide key={image.id}>
               <img src={image.img} alt="img" />
            </SwiperSlide>
         ))} */}
      </Swiper>
   </div>
);
export default ProductSlider;
