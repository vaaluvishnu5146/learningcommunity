import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import APP_ROUTES from "./Config/Router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App(props) {
  const [cart, setCart] = useState([]);

  function handleAddTocart(data = {}) {
    if (data) {
      let cartCopy = [...cart];
      cartCopy.push(data);
      setCart(cartCopy);
    }
  }
  const newProps = {
    ...props,
    cart,
    handleAddTocart,
  };
  return (
    <div className="App">
      <Navbar brand="Learning community" cartCount={cart.length} />
      <Routes>
        {APP_ROUTES.map((route, index) => (
          <Route
            key={`app-routes-${route.name}-${index}`}
            path={route.path}
            element={<route.Component {...newProps} />}
            {...props}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
