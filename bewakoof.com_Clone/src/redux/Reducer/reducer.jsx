import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_IMAGE,
  SET_PRODUCT_DATA,
  UPDATE_CART_ITEM_QTY,
} from "../action/action";
import { initialState } from "./InitialDataStorage";

// Slider Reducer
export const sliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IMAGE:
      return {
        ...state,
        SliderImages: payload,
      };
    default:
      return state;
  }
};

// Product Reducer
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DATA:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

// Cart Reducer
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      let updatedCartItems;
      if (itemInCart) {
        // If item is already in the cart, increase its quantity
        updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // If item is not in the cart, add it with a quantity of 1
        updatedCartItems = [...state.cartItems, { ...action.payload, qty: 1 }];
      }

      // Calculate the new cartCount by summing up the quantities of all items
      const newCartCount = updatedCartItems.reduce(
        (count, item) => count + item.qty,
        0
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: newCartCount, // Update the cartCount in the state
      };
    }
    case REMOVE_FROM_CART: {
      // Filter out the item to be removed from the cart
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      // Calculate the new cartCount by summing the quantities of the remaining items
      const newCartCount = updatedCartItems.reduce(
        (count, item) => count + item.qty,
        0
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: newCartCount, // Update the cartCount in the state
      };
    }
    case UPDATE_CART_ITEM_QTY: {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );

      // Calculate the new cartCount by summing the quantities of the updated items
      const newCartCount = updatedCartItems.reduce(
        (count, item) => count + item.qty,
        0
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: newCartCount, // Update the cartCount in the state
      };
    }
    default:
      return state;
  }
};
