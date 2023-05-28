import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartProvider from "../Context/CartContext";

export default function LandingPage(props) {
  return (
    <CartProvider>
      <div id="home-page" data-testid="home-page">
        <Navbar brand="Learning community" />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
}
