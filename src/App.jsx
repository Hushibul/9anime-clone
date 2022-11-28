import React from "react";
import Navbar from "./components/headings/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchAnime from "./pages/AnimePage";
import { AnimeProvider } from "./contexts/AnimeContext";
import { LoginProvider } from "./contexts/LoginContext";
import Contact from "./pages/Contact";
import Footer from "./components/headings/Footer";

const App = () => {
  return (
    <Router>
      <LoginProvider>
        <Navbar />
      </LoginProvider>
      <AnimeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<WatchAnime />} />
          <Route path="/watch/:animeId" element={<WatchAnime />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimeProvider>
      <Footer />
    </Router>
  );
};

export default App;
