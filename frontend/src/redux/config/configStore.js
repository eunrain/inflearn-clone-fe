import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/ signupSlice";
import post from "../modules/postSlice";
import login from "../modules/loginSlice";
import cart from "../modules/cartSlice";
import heart from "../modules/heartSlice";

const store = configureStore({
  reducer: {
    signup: signup,
    post: post,
    login: login,
    cart: cart,
    heart: heart,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
