/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

const CartPayment = () => {
   // Coupon field show/hide
   const [filedHide, setFieldHide] = useState(false);
   const handleShowHide = () => {
      setFieldHide(!filedHide);
   };
   return (
      <>
         <div className="cartPayment">
            <div className="cartPayment__title">Order details</div>
            <div className="cartPayment__amount">
               <p className="amount__order-total">Order total:</p>
               <div>
                  <p className="amount__price">62.44 USD</p>
                  <p>All taxes & customs included</p>
               </div>
            </div>
            <div className="cartPayment__coupon">
               {filedHide ? (
                  <div>
                     <p className="coupon__field-label">Coupon code:</p>
                     <div className="coupon__field">
                        <input type="text" />
                        <button type="button">Apply</button>
                     </div>
                  </div>
               ) : (
                  <ul>
                     <li className="coupon__title" onClick={handleShowHide}>
                        I have a coupon code
                     </li>
                  </ul>
               )}
            </div>
            <div className="cartPayment__button">
               <button type="button">Checkout</button>
            </div>
         </div>
      </>
   );
};

export default CartPayment;
