import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomeView = lazy(() => import("./views/home"));
const RegisterView = lazy(() => import("./views/register"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route exact path="/providers/register" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
