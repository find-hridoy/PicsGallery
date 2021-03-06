/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';
import { BaseURI } from '../utils/BaseURI';

// Add to cart action
export const addToCart = (id) => async (dispatch, getState) => {
   const { data } = await axios.get(`${BaseURI}/products/${id}`);

   dispatch({
      type: CART_ADD_ITEM,
      payload: {
         product_id: data?._id,
         title: data?.title,
         price: data?.price,
         image: data?.image,
      },
   });
   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// Remove from cart action
export const removeFromCart = (id) => (dispatch, getState) => {
   dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
   });

   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
