import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HooksApp } from "./HooksApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* BrowserRouter es un componente de nivel superior llamados HOC (Higher Order Component) */}
    <React.StrictMode>
      <HooksApp />
    </React.StrictMode>
  </BrowserRouter>
);
