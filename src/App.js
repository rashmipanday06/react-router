// import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import BrowserRouter as, { Route } from 'react-router-dom'
import Home from "./compoenets/Home";
import About from "./compoenets/about";
import Contact from "./compoenets/contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
