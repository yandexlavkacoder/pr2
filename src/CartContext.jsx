import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const existing = cart.find(
      product => product.id === item.id
    );

    if (existing) {
      setCart(
        cart.map(product =>
          product.id === item.id
            ? {...product, quantity: product.quantity + 1}
            : product
        )
      );
    } else {
      setCart([
        ...cart,
        {...item, quantity: 1}
      ]);
    }
  }


  function removeFromCart(id){

    if(id === "all"){
      setCart([]);
      return;
    }

    setCart(
      cart.filter(item => item.id !== id)
    );
  }


  function getTotalPrice(){

    return cart.reduce(
      (sum,item)=>
        sum + item.price * item.quantity,
      0
    );

  }


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
