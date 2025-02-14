import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Astrology from "./pages/Astrology"; // Import Astrology page

function App() {
  const blogsRef = useRef(null);

  const scrollToBlogs = () => {
    if (blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home scrollToBlogs={scrollToBlogs} />} />
        <Route path="/astrology" element={<Astrology />} /> {/* Astrology Page */}
      </Routes>
      <Blogs ref={blogsRef} />
      <Footer />
    </Router>
  );
}

export default App;