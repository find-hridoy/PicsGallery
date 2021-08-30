import React from 'react';
import CartDetails from '../Components/CartComponents/CartDetails';
import CartPayment from '../Components/CartComponents/CartPayment';
import Layout from '../Components/Layout/Layout';
import allImage from '../Data/imageData';

const CartScreen = () => {
   console.log('cart');
   return (
      <Layout>
         <div className="cart">
            <div className="cart__details">
               <div className="cart__title">Your cart</div>
               {allImage.map((data) => (
                  <CartDetails data={data} key={data.id} />
               ))}
            </div>
            <div className="cart__payment">
               <CartPayment />
            </div>
         </div>
      </Layout>
   );
};

export default CartScreen;
