import { Routes, Route } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { HomeComponent } from "./components/HomeComponent";
import "./App.css";
import About from "./components/About";
import Service from "./components/Service";
import Faq from "./components/Faq";
import ContactComponent from "./components/ContactComponent";
import Careers from "./components/Careers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="home" element={<HomeComponent />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Service />} />
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<ContactComponent />} />
      <Route path="careers" element={<Careers />} />
    </Routes>
  );
}

export default App;
