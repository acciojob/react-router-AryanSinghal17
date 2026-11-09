import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";

import About from "./About";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<p>Welcome to my website</p>} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
};

export default App;
