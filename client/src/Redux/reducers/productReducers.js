/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */

import {
   PRODUCT_CREATE_FAILURE,
   PRODUCT_CREATE_REQUEST,
   PRODUCT_CREATE_RESET,
   PRODUCT_CREATE_SUCCESS,
   PRODUCT_DELETE_FAILURE,
   PRODUCT_DELETE_REQUEST,
   PRODUCT_DELETE_SUCCESS,
   PRODUCT_LIST_FAILURE,
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS
} from '../constants/productConstants';

// Product create reducer
export const productCreateReducer = (state = {}, { type, payload }) => {
   switch (type) {
      case PRODUCT_CREATE_REQUEST:
         return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
         return { loading: false, success: true, product: payload };
      case PRODUCT_CREATE_FAILURE:
         return { loading: false, error: payload };
      case PRODUCT_CREATE_RESET:
         return {};
      default:
         return state;
   }
};

// Product List reducer
export const productListReducer = (state = {products: []}, { type, payload }) => {
   switch (type) {
      case PRODUCT_LIST_REQUEST:
         return { loading: true };
      case PRODUCT_LIST_SUCCESS:
         return { loading: false, success: true, products: payload };
      case PRODUCT_LIST_FAILURE:
         return { loading: false, error: payload };
      default:
         return state;
   }
};

// Product delete reducer
export const productDeleteReducer = (state = {}, { type, payload }) => {
   switch (type) {
      case PRODUCT_DELETE_REQUEST:
         return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
         return { loading: false, success: true };
      case PRODUCT_DELETE_FAILURE:
         return { loading: false, error: payload };
      default:
         return state;
   }
};
