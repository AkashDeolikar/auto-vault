// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigate } from "react-router-dom";

// Pages
import Login from "./component/auth/login";
import Register from "./component/auth/register";
import CarList from "./component/utility/carlist";
import AddCar from "./component/utility/addcar";
import Home from "./component/utility/home";
import Contact from "./component/utility/contact";
// import Cars from "./component/utility/cars";
import ForgotPassword from "./component/auth/forgotpassword";
import Modal from "./component/auth/modal";
import Seeoffer from "./component/headerfooter/seeoffer";
import ContactClick from "./component/utility/contactclick";


//Car pages link
import MarutSwiftDetail from "./component/cardetails/MarutSwiftDetail";
import TataNexonDetail from "./component/cardetails/TataNexonDetail";
import ToyotaInnovaDetail from "./component/cardetails/ToyotaInnovaDetail";
import HyundaiCretaDetail from "./component/cardetails/HyundaiCretaDetail";
import SuzukiErtigaDetail from "./component/cardetails/SuzukiErtigaDetail";
import OmniDetail from "./component/cardetails/OminDetail";

// Layout
import CarNavbar from "./component/navbar/navbar";
import Footer from "./component/headerfooter/footer";
import Header from "./component/headerfooter/header";

// Animation Wrapper
import AnimatedPage from "./component/utility/AnimatedPage";
import Temp from "./component/headerfooter/temp";
import CarDetails from "./component/pages/cardetails";


const AnimatedRoutes = ({ theme, toggleTheme, showRegister, setShowRegister }) => {
  const location = useLocation();

  return (
    <>
      <CarNavbar theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Default view home page */}
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/carlist" element={<AnimatedPage><CarList /></AnimatedPage>} />
          <Route path="/add-car" element={<AddCar />} />

          {/* Sign-In and registration */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register-modal" element={
            <Modal isOpen={showRegister} onClose={() => setShowRegister(false)}>
              <Register closeModal={() => setShowRegister(false)} />
            </Modal>
          } />

          {/* Default view home page */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/header" element={<Seeoffer />} />
          <Route path="/contactclick" element={<ContactClick />} />

          {/* Cars impport for Home Screen */}
          <Route path="/swift" element={<MarutSwiftDetail />} />
          <Route path="/creta" element={<HyundaiCretaDetail />} />
          <Route path="/nexon" element={<TataNexonDetail />} />
          <Route path="/ertiga" element={<SuzukiErtigaDetail />} />
          <Route path="/omni" element={<OmniDetail />} />
          <Route path="/innova" element={<ToyotaInnovaDetail />} />

          {/* Offer Page */}
          <Route path="/seeoffer" element={<Seeoffer />} />
          <Route path="/temp" element={<Temp />} />

          {/* <Route path="/" element={<CarSearch />} />
          <Route path="/details/:carId" element={<CarDetails />} /> */}
          <Route path="/cardetails" element={<CarDetails />} />

        </Routes>
      </AnimatePresence>
      <div className="ContentWrapper">
        <Footer />
      </div>
    </>
  );
};

function App() {
  const [theme, setTheme] = useState("light");
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <AnimatedRoutes
        theme={theme}
        toggleTheme={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
    </Router>
  );
}

export default App;

