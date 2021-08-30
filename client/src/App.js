import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddProductScreen from './Pages/AddProductScreen';
import CartScreen from './Pages/CartScreen';
import DashboardScreen from './Pages/DashboardScreen';
import HomeScreen from './Pages/HomeScreen';
import ImageScreen from './Pages/ImageScreen';
import LoginScreen from './Pages/LoginScreen';
import SignupScreen from './Pages/SignupScreen';
import './Sass/App.scss';
import PrivateRoute from './Utils/Private/PrivateRoute';

const App = () => (
   <div className="app">
      <Switch>
         <Route path="/" exact component={HomeScreen} />
         <Route path="/images/:id" exact component={ImageScreen} />
         <Route path="/signup" exact component={SignupScreen} />
         <Route path="/login" exact component={LoginScreen} />
         <Route path="/cart" exact component={CartScreen} />
         <PrivateRoute path="/dashboard/dashboard" exact component={DashboardScreen} />
         <PrivateRoute path="/dashboard/addProduct" exact component={AddProductScreen} />
      </Switch>
   </div>
);

export default App;