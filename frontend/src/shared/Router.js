import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Category from "../pages/Category";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Bucket from "../pages/Bucket";
import Chat2 from "../components/Chat2";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bucket" element={<Bucket />} />
        <Route path="/chat2" element={<Chat2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
