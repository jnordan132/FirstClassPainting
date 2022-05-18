import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Component || Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import ResExterior from "./pages/ResExterior";
import ResInterior from "./pages/ResInterior";
import ComExterior from "./pages/ComExterior";
import ComInterior from "./pages/ComInterior";
import Contact from "./pages/Contact";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/residential/exterior" element={<ResExterior />} />
          <Route path="/residential/interior" element={<ResInterior />} />
          <Route path="/commercial/exterior" element={<ComExterior />} />
          <Route path="/commercial/interior" element={<ComInterior />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
