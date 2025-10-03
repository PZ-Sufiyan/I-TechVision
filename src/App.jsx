import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Components/home/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
