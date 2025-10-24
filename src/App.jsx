import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import InternshipForm from "./Components/forms/InternshipForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<InternshipForm />} />
      </Routes>
    </Router>
  );
}