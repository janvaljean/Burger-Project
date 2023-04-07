import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App

