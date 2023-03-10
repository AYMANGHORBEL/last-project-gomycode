import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import ProductDetails from "./components/products/Product";
import NewProduct from "./components/products/NewProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
