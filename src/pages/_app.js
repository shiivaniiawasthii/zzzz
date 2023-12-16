import "@/styles/globals.css";
import { useState, createContext, useEffect } from "react";
import AppContext from "../../components/AppContext";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const inc = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, qty: item.qty + 1 } : item
      )
    );
    // Update the total price after updating the quantity
    updateTotalPrice();
  };

  const dec = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId
          ? { ...item, qty: Math.max(1, item.qty - 1) } // Ensure quantity doesn't go below 1
          : item
      )
    );
    // Update the total price after updating the quantity
    updateTotalPrice();
  };

  const updateTotalPrice = () => {
    // Calculate the total price based on the quantities and prices in the cart
    const newTotalPrice = cart.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    router.push("/cart");
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };
  useEffect(() => {
    // Calculate the initial total price when the component mounts
    updateTotalPrice();
  }, [cart]); // Recalculate when the cart changes

  return (
    <AppContext.Provider
      value={{
        inc,
        dec,
        cart,
        addToCart,
        removeFromCart,
        totalPrice,

        updateTotalPrice,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
