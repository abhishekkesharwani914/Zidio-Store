import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProtectedRoute from "./Utils/ProtectedRoute.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import {
  SigninPage,
  SignUpPage,
  HelpAndSupport,
  Home,
  ProductDetails,
  Address,
  Cart,
  Dashboard,
  Orders,
  Payment,
  Profile,
  Shop,
  Wishlist,
  AddNewAddress,
  SellerDashboard,
  Analytics,
  Overview,
  Reviews,
  Customers,
  Inventory,
  SellerOrders,
  Products,
  AddProductPage,
} from "./index.js";
import { Provider, useSelector } from "react-redux";
import { store } from "./Store/store.js";

// Auth wrapper for protected routes

function RootApp() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Auth Routes */}
        <Route path="accounts">
          <Route path="login" element={<SigninPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        {/* Protected App Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute allowedUser={["customer", "seller"]}>
              <App />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product-detail" element={<ProductDetails />} />
          <Route path="account" element={<Dashboard />}>
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="address" element={<Address />}>
              <Route path="address-id/:id" element={<AddNewAddress />} />
            </Route>
            <Route path="payment" element={<Payment />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route
            path="/store"
            element={
              <ProtectedRoute allowedUser={["seller"]}>
                <SellerDashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Overview />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<SellerOrders />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="customers" element={<Customers />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="add-product" element={<AddProductPage />} />
          </Route>
          <Route path="help-support" element={<HelpAndSupport />} />
        </Route>
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RootApp />
  </Provider>
);
