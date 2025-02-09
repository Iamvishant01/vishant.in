import React, { useRef } from 'react';
import './App.css';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const blogsRef = useRef(null);

  const scrollToBlogs = () => {
    if (blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <Home scrollToBlogs={scrollToBlogs} />
      <div ref={blogsRef}>
        <Blogs />
      </div>
      <Footer/>
    </>
  );
}

export default App;