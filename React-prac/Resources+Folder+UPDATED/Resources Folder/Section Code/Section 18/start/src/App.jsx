import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import UserContext from "./contexts/UserContext";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { getJwt, getUser } from "./services/userServices";
import setAuthToken from "./utils/setAuthToken";
import {
  addToCartAPI,
  decreaseProductAPI,
  getCartAPI,
  increaseProductAPI,
  removeFromCartAPI,
} from "./services/cartServices";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "./contexts/CartContext";
import cartReducer from "./reducers/cartReducer";

setAuthToken(getJwt());

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const jwtUser = getUser();
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setUser(jwtUser);
      }
    } catch (error) {}
  }, []);

  const addToCart = useCallback(
    (product, quantity) => {
      dispatchCart({ type: "ADD_TO_CART", payload: { product, quantity } });

      addToCartAPI(product._id, quantity)
        .then((res) => {
          toast.success("Product Added Succesfully!");
        })
        .catch((err) => {
          toast.error("Failed to add product!");
          dispatchCart({ type: "REVERT_CART", payload: { cart } });
        });
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (id) => {
      dispatchCart({ type: "REMOVE_FROM_CART", payload: { id } });

      removeFromCartAPI(id).catch((err) => {
        toast.error("Something went wrong!");
        dispatchCart({ type: "REVERT_CART", payload: { cart } });
      });
    },
    [cart]
  );

  const updateCart = useCallback(
    (type, id) => {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (item) => item.product._id === id
      );

      if (type === "increase") {
        updatedCart[productIndex].quantity += 1;
        dispatchCart({ type: "GET_CART", payload: { products: updatedCart } });

        increaseProductAPI(id).catch((err) => {
          toast.error("Something went wrong!");
          dispatchCart({ type: "REVERT_CART", payload: { cart } });
        });
      }
      if (type === "decrease") {
        updatedCart[productIndex].quantity -= 1;
        dispatchCart({ type: "GET_CART", payload: { products: updatedCart } });

        decreaseProductAPI(id).catch((err) => {
          toast.error("Something went wrong!");
          dispatchCart({ type: "REVERT_CART", payload: { cart } });
        });
      }
    },
    [cart]
  );

  const getCart = useCallback(() => {
    getCartAPI()
      .then((res) => {
        dispatchCart({ type: "GET_CART", payload: { products: res.data } });
      })
      .catch((err) => {
        toast.error("Something went wrong!");
      });
  }, [user]);

  useEffect(() => {
    if (user) {
      getCart();
    }
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          updateCart,
        }}
      >
        <div className="app">
          <Navbar />
          <main>
            <ToastContainer position="bottom-right" />
            <Routing />
          </main>
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
