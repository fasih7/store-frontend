import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Products from "./components/Products";
import Footer from "./components/Footer";
// import ProductCard1 from "./components/temp/ProductCard1";
// import ProductCard2 from "./components/temp/ProductCard2";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import LoginModal from "./components/LoginModal";
import SignUp from "./pages/Signup";
import NotFound from "./pages/NotFound";

//TODO: uninstall saas | @fortawesome/fontawesome-free

function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
