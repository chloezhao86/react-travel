import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, Register } from "./component/pages";
import { SignInPage } from "./component/pages";
import { Detail } from "./component/pages";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/signin"} element={<SignInPage />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/detail/:touristRouteId"} element={<Detail />} />
          </Routes>
        </BrowserRouter>
        ;
      </>
    </>
  );
}

export default App;
