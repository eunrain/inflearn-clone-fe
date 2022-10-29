import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/ signupSlice";

const store = configureStore({
  reducer: { signup: signup },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
