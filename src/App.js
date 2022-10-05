import React from "react";
import "./App.css";
import Firstpage from "./Components/Page1";
import SecondPage from "./Components/Page2";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Firstpage />}></Route>
      <Route path="/SecondPage" element={<SecondPage />}></Route>
    </Routes>
  );
}

export default App;
