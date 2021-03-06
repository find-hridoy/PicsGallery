/* eslint-disable import/prefer-default-export */

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, { type, payload }) => {
   switch (type) {
      case CART_ADD_ITEM:
         // eslint-disable-next-line no-case-declarations
         const item = payload;

         // eslint-disable-next-line no-case-declarations
         const existItem = state.cartItems?.find((x) => x.product_id === item.product_id);

         if (existItem) {
            return {
               ...state,
               cartItems: state.cartItems?.map((x) => (x.product_id === existItem ? item : x)),
            };
         }
         return { ...state, cartItems: [...state.cartItems, item] };

      case CART_REMOVE_ITEM:
         return {
            ...state,
            cartItems: state.cartItems?.filter((x) => x.product_id !== payload),
         };
      default:
         return state;
   }
};
