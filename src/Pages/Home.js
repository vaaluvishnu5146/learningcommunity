import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import APP_ROUTES from "../Config/Router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home(props) {
  // const { pageTitle = "" } = props;
  // const childrenRoutes = APP_ROUTES.find((route) => route.name === pageTitle);
  return (
    <div id="home-page" data-testid="home-page">
      <Navbar brand="Learning community" cartCount={0} />
      <Outlet />
      <Footer />
    </div>
  );
}
