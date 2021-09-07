/* eslint-disable no-underscore-dangle */
import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartDetails from '../Components/CartComponents/CartDetails';
import CartPayment from '../Components/CartComponents/CartPayment';
import Header from '../Components/Layout/Header';

const CartScreen = () => {
   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;
   return (
      <>
         <Header />
         <div className="cart">
            <div className="cart__details">
               <div className="cart__title">
                  {cartItems?.length === 0 ? 'Your cart is currently empty' : 'Your cart'}
               </div>
               <div className="cart__nav-item">
                  {cartItems?.length === 0 && (
                     <NavLink className="cart__nav-link" to="/">
                        <HiArrowNarrowLeft /> Start Shopping
                     </NavLink>
                  )}
               </div>
               {cartItems?.map((item) => (
                  <CartDetails item={item} key={item.product_id} />
               ))}
            </div>
            <div className="cart__payment">
               {cartItems?.length > 0 && <CartPayment cartItems={cartItems} />}
            </div>
         </div>
      </>
   );
};

export default CartScreen;
