import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomeView = lazy(() => import("./views/home"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
