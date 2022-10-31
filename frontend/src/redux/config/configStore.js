import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/ signupSlice";
import post from "../modules/postSlice";
import login from "../modules/loginSlice";

const store = configureStore({
  reducer: { signup: signup, post: post, login:login },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
