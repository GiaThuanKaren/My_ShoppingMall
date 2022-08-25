import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./page";
import { PublicRoute } from "./routes";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path={PublicRoute.Home} element={<Home />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
