// Action Types
export const SET_IMAGE = "SET_IMAGE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_QTY = "UPDATE_CART_ITEM_QTY";
export const SET_PRODUCT_DATA = "SET_PRODUCT_DATA";

// Action Creators
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const setImage = (images) => ({
  type: SET_IMAGE,
  payload: images,
});

export const setProductData = (products) => ({
  type: SET_PRODUCT_DATA,
  payload: products,
});

export const updateCartItemQty = (id, qty) => ({
  type: UPDATE_CART_ITEM_QTY,
  payload: { id, qty },
});
