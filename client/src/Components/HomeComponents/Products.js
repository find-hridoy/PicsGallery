/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SwiperCore, { Navigation } from 'swiper';
// Swiper core and required modules
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/swiper.scss';

// install Swiper modules
SwiperCore.use([Navigation]);

const Products = () => {
   // redux element
   const productList = useSelector((state) => state.productList);
   const { products } = productList;
   return (
      <div className="products">
         <div className="products__premium">
            <p>Nature Photos</p>
            <div className="productSlider">
               <Swiper spaceBetween={-60} slidesPerView={5} navigation>
                  {products?.map(
                     (product) =>
                        product.category === 'Premium' &&
                        product.subCategory === 'Nature' && (
                           <SwiperSlide key={product._id}>
                              <NavLink to={`/items/${product._id}`}>
                                 <img src={product.image.secure_url} alt={product._id} />
                              </NavLink>
                           </SwiperSlide>
                        )
                  )}
               </Swiper>
            </div>
         </div>

         <div className="products__premium">
            <p>Marvel</p>
            <div className="productSlider">
               <Swiper spaceBetween={-60} slidesPerView={5} navigation>
                  {products?.map(
                     (product) =>
                        product.category === 'Premium' &&
                        product.subCategory === 'Marvel' && (
                           <SwiperSlide key={product._id}>
                              <NavLink to={`/items/${product._id}`}>
                                 <img src={product.image.secure_url} alt={product._id} />
                              </NavLink>
                           </SwiperSlide>
                        )
                  )}
               </Swiper>
            </div>
         </div>

         <div className="products__premium">
            <p>Mobile View</p>
            <div className="productSlider">
               <Swiper spaceBetween={-60} slidesPerView={5} navigation>
                  {products?.map(
                     (product) =>
                        product.category === 'Premium' &&
                        product.subCategory === 'Mobile View' && (
                           <SwiperSlide key={product._id}>
                              <NavLink to={`/items/${product._id}`}>
                                 <img src={product.image.secure_url} alt={product._id} />
                              </NavLink>
                           </SwiperSlide>
                        )
                  )}
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default Products;
