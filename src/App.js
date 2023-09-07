import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/add" element={<Add />} />
        <Route path="/books/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
