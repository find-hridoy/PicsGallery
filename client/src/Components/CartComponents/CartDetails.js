import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const CartDetails = ({ data }) => {
   console.log('cartDetails');

   return (
      <>
         <div className="cartDetails">
            <div className="cartDetails__image">
               <img src={data.img} alt={data.img} />
            </div>
            <div className="cartDetails__area">
               <div className="cartDetails__details">
                  <div className="details__title">Sky of colors</div>
                  <div className="details">
                     Author : <span>Jon Doe</span>
                  </div>
                  {/* <div className="details">Size : 1 MB</div>
                  <div className="details">Resolution : 210x320 px</div>
                  <div className="details">Format : JPG/JPEG</div> */}
                  <div className="details">Quantity : 1</div>
                  <div className="details__price">
                     Price : <span>$31</span>
                  </div>
               </div>
               <div className="cartDetails__remove">
                  <button type="button">
                     <TiDeleteOutline />
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default CartDetails;
