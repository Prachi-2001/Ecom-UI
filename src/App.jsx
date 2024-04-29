import { useState } from "react";
import Main from "./page/Main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/all-european-brands" element={<Main />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
