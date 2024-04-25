import { useState } from "react";
import Product from "./components/Product/Product";
import Supplier from "./components/Supplier/Supplier";
import Order from "./components/Order/Order";
import Dasboard from "./components/Dashborad"
import { Provider } from "./context/Context";
import "./App.css";

function App() {

  return (
    <>
      <Provider>
        <Dasboard />
      </Provider>
    </>
  );
}

export default App;
