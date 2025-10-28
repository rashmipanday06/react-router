// import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import BrowserRouter as, { Route } from 'react-router-dom'
import Home from "./compoenets/Home";
import About from "./compoenets/About";
import Contact from "./compoenets/Contact";
import Product from "./compoenets/Product";
import ProductDetails from "./compoenets/ProductDetails";
import Overview from "./compoenets/Overview";
import Review from "./compoenets/Review";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav style={{ display: "flex", gap: "20px" }}>
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}
          <Link to="/product">Product</Link>
    

        </nav>
        <Routes>
          <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          </Route>

            <Route path="product" element={<Product />} />

        {/* Nested Route */}
        <Route path="product/:id" element={<ProductDetails />}>
          <Route path="overview" element={<Overview />} />
          <Route path="review" element={<Review />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
