/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { AiOutlineLogout, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { CgMenuGridO, CgProfile } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import userImg from '../../Data/images/user.png';
import { logout } from '../../Redux/actions/userActions';

const Header = () => {
   // Dropdown State
   const [dropdown, setDropdown] = useState(false);

   // User Information
   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const logoutHandler = () => {
      dispatch(logout());
   };

   return (
      <header>
         <div className="header__area">
            <div className="header__logo">
               <NavLink to="/" className="logo">
                  PicsGallery
               </NavLink>
            </div>
            <div className="header__search">
               <FiSearch />
               <input
                  type="search"
                  placeholder="Search Here...."
                  autoComplete="false"
                  spellCheck="false"
               />
            </div>
            <div className="header__nav">
               <nav>
                  <ul>
                     <li>
                        <NavLink className="nav__item" to="/cart">
                           <AiOutlineShoppingCart />
                           <span>Cart</span>
                        </NavLink>
                     </li>

                     {userInfo ? (
                        <li>
                           <div
                              className={dropdown ? 'dropdown activeDropdown' : 'dropdown'}
                              onClick={() => setDropdown(!dropdown)}
                           >
                              <img src={userImg} alt="userImg" />
                              <div
                                 className={
                                    dropdown
                                       ? 'dropdown__username activeUsername'
                                       : 'dropdown__username'
                                 }
                              >
                                 {userInfo.fullName?.slice(0, 6)}...
                              </div>
                           </div>
                           {dropdown ? (
                              <div className="dropdown__menu">
                                 {userInfo.isAdmin && (
                                    <NavLink className="dropdown__item" to="/dashboard/dashboard">
                                       <CgMenuGridO />
                                       <span>Dashboard</span>
                                    </NavLink>
                                 )}
                                 <NavLink className="dropdown__item" to="/dashboard">
                                    <CgProfile />
                                    <span>Profile</span>
                                 </NavLink>
                                 <div className="dropdown__item" onClick={logoutHandler}>
                                    <AiOutlineLogout />
                                    <span>Logout</span>
                                 </div>
                              </div>
                           ) : null}
                        </li>
                     ) : (
                        <li>
                           <NavLink className="nav__item" to="/login">
                              <AiOutlineUser />
                              <span>Login</span>
                           </NavLink>
                        </li>
                     )}
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
};

export default Header;
