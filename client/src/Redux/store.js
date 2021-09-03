/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
   productCreateReducer,
   productDeleteReducer,
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
   productDelete: productDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null;
const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
   reducers,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
