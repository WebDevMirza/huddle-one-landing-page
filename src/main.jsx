import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const supportsContainerQueries = "container" in document.documentElement.style;
if (!supportsContainerQueries) {
  import("container-query-polyfill");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
