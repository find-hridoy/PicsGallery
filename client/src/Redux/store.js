/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
   productCreateReducer,
   productDeleteReducer,
   productDetailsReducer,
   productListReducer
} from './reducers/productReducers';
import { userDeleteReducer, userListReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducers = combineReducers({
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userList: userListReducer,
   userDelete:userDeleteReducer,
   createProduct: productCreateReducer,
   productList: productListReducer,
   productDetails: productDetailsReducer,
   productDelete: productDeleteReducer,
   cart: cartReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null;

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
   
const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
   cart: {cartItems : cartItemsFromStorage}
};

const middleware = [thunk];

const store = createStore(
   reducers,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
