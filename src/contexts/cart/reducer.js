import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    case UPDATE_CART_ITEM:
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    default:
      return state;
  }
}

export default reducer;
