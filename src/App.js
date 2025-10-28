// import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import BrowserRouter as, { Route } from 'react-router-dom'
import Home from "./compoenets/Home";
// import About from "./compoenets/About";
import Contact from "./compoenets/Contact";
// import Product from "./compoenets/Product";
// import ProductDetails from "./compoenets/ProductDetails";
import ProductDetails from "./compoenets/programaticRoute/productDetails";
import Overview from "./compoenets/Overview";
import Review from "./compoenets/Review";
import Company from "./compoenets/company";
import Product from "./compoenets/programaticRoute/product";
import Dashboard from "./compoenets/conditionalRendering/dashboard";
import Login from "./compoenets/conditionalRendering/login";
import {AuthProvider} from './auth/authContext'
import ProtectedRoute from "./auth/protectedRoute";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="login" element={<Login />} />

          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

