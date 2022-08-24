import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Classes from "./components/Classes";
import Loader from "./components/Loader";
import Register from "./components/Register";

import "./App.css";

function App() {
  let [loaded, setLoaded] = useState(false);
  //
  function handelClick(pos) {
    const eleActive = document.querySelector(".active");
    eleActive.classList.remove("active");
    const elets = document.querySelectorAll(".smoothScroll");
    elets[pos].classList.add("active");
  }
  //page loader

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 4000);
    return () => {
      clearTimeout(timer);
    };
  });
  //
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {!loaded ? (
                  <Loader />
                ) : (
                  <>
                    <NavBar isRegister={false} />
                    <Home mouse={() => handelClick(0)} />
                    <Features />
                    <About mouse={() => handelClick(1)} />
                    <Classes mouse={() => handelClick(2)} />
                    <Schedule mouse={() => handelClick(3)} />
                    <Contact mouse={() => handelClick(4)} />

                    <Footer />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <>
                  {!loaded ? (
                    <Loader />
                  ) : (
                    <>
                      <NavBar isRegister={true} />
                      <Register />
                      <Footer isRegister={true} />
                    </>
                  )}
                </>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
