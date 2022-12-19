import React from "react";
import Navbar from "./components/headings/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchAnime from "./pages/AnimePage";
import { AnimeProvider } from "./contexts/AnimeContext";
import { LoginProvider } from "./contexts/LoginContext";
import Contact from "./pages/Contact";
import Footer from "./components/headings/Footer";
import Watch2gather from "./pages/Watch2gather";
import DonatePage from "./pages/DonatePage";
import NewestPage from "./pages/NewestPage";

const App = () => {
  return (
    <Router>
      <LoginProvider>
        <Navbar />
        <AnimeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch" element={<WatchAnime />} />
            <Route path="/watch/:name" element={<WatchAnime />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/watch2gather" element={<Watch2gather />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/newest" element={<NewestPage />} />
            <Route path="/genre" element={<NewestPage />} />
            <Route path="/type" element={<NewestPage />} />
          </Routes>
        </AnimeProvider>
        <Footer />
      </LoginProvider>
    </Router>
  );
};

export default App;
