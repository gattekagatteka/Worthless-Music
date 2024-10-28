import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./layout/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Offers } from "./components/Offers";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="offers" element={<Offers />} />
      </Routes>
      {<Footer />}
    </BrowserRouter>
  );
}

export default App;
