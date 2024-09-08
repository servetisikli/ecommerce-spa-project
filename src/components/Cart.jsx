import React from "react";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cart, removeFromCart, updateCartItem } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <button onClick={() => updateCartItem({ ...item, quantity: item.quantity + 1 })}>Increase Quantity</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;