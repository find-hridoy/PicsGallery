/* eslint-disable prettier/prettier */
import axios from 'axios';
import {
   USER_LOGIN_FAILURE,
   USER_LOGIN_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGOUT,
   USER_REGISTER_FAILURE,
   USER_REGISTER_REQUEST,
   USER_REGISTER_SUCCESS
} from '../constants/userConstants';
import { BaseURI } from '../utils/BaseURI';

// Login action 
export const login = (username, password) => async (dispatch) => {
   try {
      dispatch({
         type: USER_LOGIN_REQUEST,
      });

      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };

      const { data } = await axios.post(`${BaseURI}/api/users/login`, { username, password }, config);

      dispatch({
         type: USER_LOGIN_SUCCESS,
         payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: USER_LOGIN_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

// Logout action 
export const logout = () => (dispatch) =>{
   localStorage.removeItem("userInfo")
   dispatch({type: USER_LOGOUT})
}

// Register action 
export const registerUser = (fullName, email, username, password) => async (dispatch) => {
   try {
      dispatch({
         type: USER_REGISTER_REQUEST,
      });

      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };

      const { data } = await axios.post(`${BaseURI}/api/users/register`, { fullName, email, username, password }, config);

      dispatch({
         type: USER_REGISTER_SUCCESS,
         payload: data,
      });

      dispatch({
         type: USER_LOGIN_SUCCESS,
         payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: USER_REGISTER_FAILURE,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};
