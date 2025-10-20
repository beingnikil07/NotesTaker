import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";
import ClassPage from "./pages/ClassPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes/:classId" element={<ClassPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
