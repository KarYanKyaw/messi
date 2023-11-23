import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Highlights from "./components/Highlights";
import Achievements from "./components/Achievements";
import "../node_modules/animate.css/animate.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </>
  );
};

export default App;
