import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Service";
import Contact from "./components/Contact";

import "./Style/App.scss"
import "./Style/Colors.scss"
import "./Style/Contact.scss"
import "./Style/Footer.scss"
import "./Style/Header.scss"
import "./Style/Home.scss"
import "./Style/Service.scss"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;