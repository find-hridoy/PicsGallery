import React from 'react';

const ImageDetails = () => {
   console.log('object');
   return (
      <>
         <div className="imageDetails">
            <div className="imageDetails__title">Colors of Sky</div>
            <div className="imageDetails__author">
               by <span>David</span>
            </div>
            {/* <div className="imageDetails__price">$ 31</div> */}
            <div className="imageDetails__category">Premium Photos</div>
            <div className="imageDetails__button">
               <button type="button"> $31 • Add to cart</button>
            </div>
         </div>
      </>
   );
};

export default ImageDetails;
