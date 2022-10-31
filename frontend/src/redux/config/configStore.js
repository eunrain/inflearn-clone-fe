import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/ signupSlice";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { signup: signup, post: post },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
