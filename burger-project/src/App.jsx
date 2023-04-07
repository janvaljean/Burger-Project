import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App

