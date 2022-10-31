import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Bucket from "../pages/Bucket";
import Chat1 from "../components/Chat1";
import Chat2 from "../components/Chat2.jsx";
import PostCard1 from "../components/PostCard1";
import PostCard2 from "../components/PostCard2";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bucket" element={<Bucket />} />
        <Route path="/chat1" element={<Chat1 />} />
        <Route path="/chat2" element={<Chat2 />} />
        <Route path="/postcard1" element={<PostCard1 />} />
        <Route path="/postcard2" element={<PostCard2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
