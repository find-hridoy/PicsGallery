/* eslint-disable no-underscore-dangle */

import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';
import { BaseURI } from '../utils/BaseURI';

/* eslint-disable import/prefer-default-export */
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
