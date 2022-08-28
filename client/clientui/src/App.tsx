import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home, ProductList } from "./page";
import { PublicRoute } from "./routes";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { useSelector } from "react-redux";
import { UseGlobal } from "./hooks";

function App() {
 
  return (
    <>
      <Routes>
        <Route path={PublicRoute.Home} element={<Home />} />
        <Route path={PublicRoute.Product} element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
