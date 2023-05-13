import React from "react";
import { CounterPage } from "./Pages/Counter";
import PricingDetails from "./Pages/PricingDetails";
function App() {
  const page = "pricing";
  return (
    <div className="App">
      {page === "pricing" ? <PricingDetails /> : <CounterPage />}
    </div>
  );
}

export default App;
