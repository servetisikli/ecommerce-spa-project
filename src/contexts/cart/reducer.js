import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "./actions";

function reducer(state, action) {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART:
      updatedCart = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    case REMOVE_FROM_CART:
      updatedCart = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    case UPDATE_CART_ITEM:
      updatedCart = state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    default:
      return state;
  }
}

export default reducer;
