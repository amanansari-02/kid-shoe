import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Adidas from "./components/brand/Adidas";
import Nike from "./components/brand/Nike";
import Puma from "./components/brand/Puma";
import Reebok from "./components/brand/Reebok";
import Buy_page from "./components/Buy_page";
import Boys_chapels from "./components/catagories/Boys_chapels";
import Boys_formals from "./components/catagories/Boys_formals";
import Boys_sports from "./components/catagories/Boys_sports";
import Ladies_chapels from "./components/catagories/Ladies_chapels";
import Ladies_sandals from "./components/catagories/Ladies_sandals";
import Ladies_sports from "./components/catagories/Ladies_sports";
import Clickable_image from "./components/Clickable_image";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Portfolio from "./components/Portfolio";
import OrderDetails from "./components/Order";

function Layout() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/";

  return (
    <>
      {!hideNavbarAndFooter && (
        <>
          <Navbar />
          <Header />
          <Navbar2 />
        </>
      )}

      <Routes>
        <Route path="/home" element={<Clickable_image />} />
        <Route path="/" element={<Login />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Nike" element={<Nike />} />
        <Route path="/Puma" element={<Puma />} />
        <Route path="/Reebok" element={<Reebok />} />
        <Route path="/Adidas" element={<Adidas />} />
        <Route path="/Boys_sports" element={<Boys_sports />} />
        <Route path="/Boys_chapels" element={<Boys_chapels />} />
        <Route path="/order" element={<OrderDetails />} />
        <Route path="/Boys_formals" element={<Boys_formals />} />
        <Route path="/Ladies_sports" element={<Ladies_sports />} />
        <Route path="/Ladies_chapels" element={<Ladies_chapels />} />
        <Route path="/Ladies_sandals" element={<Ladies_sandals />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/buy/:id" element={<Buy_page />} />
      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
