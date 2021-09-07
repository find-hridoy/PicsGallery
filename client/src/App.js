import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddProductScreen from './Pages/AddProductScreen';
import CartScreen from './Pages/CartScreen';
import DashboardScreen from './Pages/DashboardScreen';
import HomeScreen from './Pages/HomeScreen';
import ImageScreen from './Pages/ImageScreen';
import LoginScreen from './Pages/LoginScreen';
import PaymentMethod from './Pages/PaymentMethod';
import ProductListScreen from './Pages/ProductListScreen';
import SignupScreen from './Pages/SignupScreen';
import UserListScreen from './Pages/UserListScreen';
import './Sass/App.scss';
import AdminRoute from './Utils/Private/AdminRoute';
import PrivateRoute from './Utils/Private/PrivateRoute';

const App = () => (
   <div className="app">
      <Switch>
         <Route path="/" exact component={HomeScreen} />
         <Route path="/items/:id" exact component={ImageScreen} />
         <Route path="/signup" exact component={SignupScreen} />
         <Route path="/login" exact component={LoginScreen} />
         <Route path="/cart" exact component={CartScreen} />
         <PrivateRoute path="/paymentMethod" exact component={PaymentMethod} />
         <AdminRoute path="/dashboard/dashboard" exact component={DashboardScreen} />
         <AdminRoute path="/dashboard/addProduct" exact component={AddProductScreen} />
         <AdminRoute path="/dashboard/products" exact component={ProductListScreen} />
         <AdminRoute path="/dashboard/users" exact component={UserListScreen} />
      </Switch>
   </div>
);

export default App;
