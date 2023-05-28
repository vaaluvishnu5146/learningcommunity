import React, { useState, useContext, createContext } from "react";

const CartContext = createContext({
  cart: [],
  handleAddTocart: (data) => {},
  handleQuantity: (type, id) => {},
});

// HOOK
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleAddTocart(data = {}) {
    if (data) {
      let cartCopy = [...cart];
      cartCopy.push(data);
      setCart(cartCopy);
    }
  }

  function handleQuantity(type = "inc", id = "") {
    let cartCopy = [...cart];
    if (id) {
      let selectedProduct = cartCopy.find((_d) => _d.id === id) || {};
      if (type === "inc") {
        selectedProduct.quantity += 1;
      }
      if (type === "dec" && selectedProduct.quantity > 1) {
        selectedProduct.quantity -= 1;
      }
      setCart(cartCopy);
    }
  }

  const value = {
    cart: cart,
    handleAddTocart: handleAddTocart,
    handleQuantity: handleQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
