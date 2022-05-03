import React, { useState } from "react";
import Logo from "../Logo";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Residential from "../../pages/Residential";
import Commercial from "../../pages/Commercial";
import Contact from "../../pages/Contact";

function NavBar() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Residential") {
      return <Residential />;
    }
    if (currentPage === "Commercial") {
      return <Commercial />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="nav">
      <div className="logo">
        <Logo />
      </div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                    id="one"
                    class="nav-link active"
                  >
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    id="two"
                    class="nav-link active"
                  >
                    ABOUT US
                  </a>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <div class="dropbtn">RESIDENTIAL</div>
                    <div class="dropdown-content">
                      <a href="#">EXTERIOR</a>
                      <a href="#">INTERIOR</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <div class="dropbtn">COMMERCIAL</div>
                    <div class="dropdown-content">
                      <a href="#">EXTERIOR</a>
                      <a href="#">INTERIOR</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    id="five"
                    class="nav-link active"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {renderPage()}
      </div>
    </div>
  );
}

export default NavBar;
