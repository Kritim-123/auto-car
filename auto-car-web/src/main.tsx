import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./components/layout/main-layout";
import Home from "./routes/home";
import VehicleDesign from "./routes/vehicle-design";
import CircuitDesign from "./routes/circuit-design";
import Code from "./routes/code";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route></Route>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Vehicle-design" element={<VehicleDesign />} />
          <Route path="Circuit-design" element={<CircuitDesign />} />
          <Route path="code" element={<Code />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
