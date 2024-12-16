import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/register/Login";
import Register from "../pages/register/Register";
import Admin from "../pages/admin/Admin";
import Auth from "../pages/auth/Auth";
import CreateProduct from "@/pages/admin/create-product/CreateProduct";
import ManageProduct from "@/pages/admin/manage-product/ManageProduct";
import AllCategories from "../pages/category/AllCategories";
import OneCategory from "../pages/category/One-category";
import ManageCategory from "../pages/admin/manage-category/ManageCategory";
import Category from "../pages/category/Category";
import CreateCategory from "../pages/admin/create-category/CreateCategory";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="create-category" element={<Category />} />
        <Route path="see-category" element={<AllCategories />} />
        <Route path="see-one-category" element={<OneCategory />} />
      </Route>

      <Route path="/" element={<Auth />}>
        <Route path="admin" element={<Admin />}>          
        <Route path="create-category" element={<CreateCategory />} />
        <Route path="create-product" element={<CreateProduct />} />
        <Route path="manage-product" element={<ManageProduct />} />
        <Route path="manage-category" element={<ManageCategory/>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
