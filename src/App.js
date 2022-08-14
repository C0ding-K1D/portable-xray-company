import { Routes, Route } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { HomeComponent } from "./components/HomeComponent";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="home" element={<HomeComponent />} />
    </Routes>
  );
}

export default App;
