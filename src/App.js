import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import APP_ROUTES from "./Config/Router";
import CategoryProvider from "./Context/CategoriesContext";

function App(props) {
  const newProps = {
    ...props,
  };
  return (
    <div className="App">
      <CategoryProvider>
        <Routes>
          {APP_ROUTES.map((route, index) => {
            return (
              <Route
                key={`app-routes-${route.name}-${index}`}
                path={route.path}
                element={
                  <route.Component {...newProps} pageTitle={route.name} />
                }
                {...props}
              >
                {route.Children &&
                  route.Children.map((r, i) => {
                    return (
                      <Route
                        key={`app-sub-routes-${r.name}-${i}`}
                        path={r.path}
                        element={
                          <r.Component {...newProps} pageTitle={r.name} />
                        }
                        {...props}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Routes>
      </CategoryProvider>
    </div>
  );
}

export default App;
