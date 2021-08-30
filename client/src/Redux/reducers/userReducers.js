/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import {
   USER_LOGIN_FAILURE,
   USER_LOGIN_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGOUT,
   USER_REGISTER_FAILURE,
   USER_REGISTER_REQUEST,
   USER_REGISTER_SUCCESS
} from '../constants/userConstants';

// Login reducer
export const userLoginReducer = (state = {}, { type, payload }) => {
   switch (type) {
      case USER_LOGIN_REQUEST:
         return { loading: true };
      case USER_LOGIN_SUCCESS:
         return { loading: false, userInfo: payload };
      case USER_LOGIN_FAILURE:
         return { loading: false, error: payload };
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Register reducer
export const userRegisterReducer = (state = {}, { type, payload }) => {
   switch (type) {
      case USER_REGISTER_REQUEST:
         return { loading: true };
      case USER_REGISTER_SUCCESS:
         return { loading: false, userInfo: payload };
      case USER_REGISTER_FAILURE:
         return { loading: false, error: payload };
      default:
         return state;
   }
};
