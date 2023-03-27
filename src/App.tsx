import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Journey } from "./components/Journey";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </Router>
  );
}

export default App;
