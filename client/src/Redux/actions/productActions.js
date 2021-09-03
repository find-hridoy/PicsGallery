/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import {
   PRODUCT_CREATE_FAILURE,
   PRODUCT_CREATE_REQUEST,
   PRODUCT_CREATE_SUCCESS,
   PRODUCT_DELETE_FAILURE,
   PRODUCT_DELETE_REQUEST,
   PRODUCT_DELETE_SUCCESS,
   PRODUCT_LIST_FAILURE,
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS
} from '../constants/productConstants';
import { BaseURI } from '../utils/BaseURI';

// Create a new product action
export const productCreate = (title, description, category,subCategory, price, image) => async (dispatch, getState) => {
  
   try {
      dispatch({
         type: PRODUCT_CREATE_REQUEST,
      });

      const {userLogin: {userInfo}} = getState();
      

      const config = {
         headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${userInfo.token}`
         },
      };

      const { data } = await axios.post(
         `${BaseURI}/products/create`,
         {title, description, category,subCategory, price, image},
         config
      );

      dispatch({
         type: PRODUCT_CREATE_SUCCESS,
         payload: data,
      });

   } catch (error) {
      dispatch({
         type: PRODUCT_CREATE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};




// Product List
export const listProduct = () => async (dispatch) => {
  
   try {
      dispatch({
         type: PRODUCT_LIST_REQUEST,
      });

      const { data } = await axios.get(
         `${BaseURI}/products`
      );

      dispatch({
         type: PRODUCT_LIST_SUCCESS,
         payload: data,
      });

   } catch (error) {
      dispatch({
         type: PRODUCT_LIST_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};


// Delete Product
export const deleteProduct = (id) => async (dispatch, getState) => {
  
   try {
      dispatch({
         type: PRODUCT_DELETE_REQUEST,
      });

      const {userLogin: {userInfo}} = getState();
      

      const config = {
         headers: {
            Authorization: `Bearer ${userInfo.token}`
         },
      };

       await axios.delete(
         `${BaseURI}/products/delete/${id}`, config
      );

      dispatch({
         type: PRODUCT_DELETE_SUCCESS,
      });

   } catch (error) {
      dispatch({
         type: PRODUCT_DELETE_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};