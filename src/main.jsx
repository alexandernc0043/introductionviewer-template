import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Home from "./Home.jsx";
import { HashRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route> {/* ROOT / INDEX ROUTE*/}
      </Routes>
    </HashRouter>
  </StrictMode>,
);
