import React from 'react';
import Marquee from 'react-fast-marquee';
import allImage from '../../Data/imageData';

const BannerMarquee = () => (
   <div className="banner__marquee">
      <p>Free Photos</p>
      <Marquee pauseOnHover="true" speed="60" gradientWidth="300px">
         {allImage.map((image) => (
            <div className="banner__marquee-image" key={image.id}>
               <img src={image.img} alt="img" />
            </div>
         ))}
      </Marquee>
      <br />
   </div>
);

export default BannerMarquee;
