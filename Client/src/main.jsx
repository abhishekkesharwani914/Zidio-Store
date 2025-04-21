import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
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
} from "./index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<SigninPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mens-wear" element={<Shop />} />
      <Route path="/product-detail" element={<ProductDetails />} />
      <Route path="/user-account" element={<Dashboard />}>
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
        <Route path="address" element={<Address />} />
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="help-support" element={<HelpAndSupport />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
