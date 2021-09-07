/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import CartDetails from '../Components/CartComponents/CartDetails';
import CartPayment from '../Components/CartComponents/CartPayment';
import Layout from '../Components/Layout/Layout';

const CartScreen = () => {
   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;
   return (
      <Layout>
         <div className="cart">
            <div className="cart__details">
               <div className="cart__title">Your cart</div>
               {cartItems?.map((item) => (
                  <CartDetails item={item} key={item._id} />
               ))}
            </div>
            <div className="cart__payment">
               <CartPayment cartItems={cartItems} />
            </div>
         </div>
      </Layout>
   );
};

export default CartScreen;
