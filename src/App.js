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
      <Routes>
        {APP_ROUTES.map((route, index) => {
          console.log(route);
          return (
            <Route
              key={`app-routes-${route.name}-${index}`}
              path={route.path}
              element={<route.Component {...newProps} pageTitle={route.name} />}
              {...props}
            >
              {route.Children &&
                route.Children.map((r, i) => {
                  console.log(r);
                  return (
                    <Route
                      key={`app-sub-routes-${r.name}-${i}`}
                      path={r.path}
                      element={<r.Component {...newProps} pageTitle={r.name} />}
                      {...props}
                    />
                  );
                })}
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
