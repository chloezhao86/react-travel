import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, SignInPage, Detail } from "./component/pages";
import { HomePage } from "./component/pages/home/HomePage";
import { SearchPage } from "./component/pages/search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/signin"} element={<SignInPage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/detail/:touristRouteId"} element={<Detail />} />
          <Route path={"/search/:keywords"} element={<SearchPage />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
