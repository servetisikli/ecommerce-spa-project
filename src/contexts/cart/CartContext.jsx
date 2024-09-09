import { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext as default, CartProvider };
