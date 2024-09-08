import { useContext } from "react";
import CartContext from "../contexts/cart/CartContext";

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  const updateCartItem = (item) =>
    dispatch({ type: "UPDATE_CART_ITEM", payload: item });

  return {
    cart: state,
    addToCart,
    removeFromCart,
    updateCartItem,
  };
};

export default useCart;
