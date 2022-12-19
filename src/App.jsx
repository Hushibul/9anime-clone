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
import AddedPage from "./pages/AddedPage";
import UpdatedPage from "./pages/UpdatedPage";
import GenrePage from "./pages/GenrePage";
import TypePage from "./pages/TypePage";

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
            <Route path="/genre" element={<GenrePage />} />
            <Route path="/types" element={<TypePage />} />
            <Route path="/added" element={<AddedPage />} />
            <Route path="/updated" element={<UpdatedPage />} />
          </Routes>
        </AnimeProvider>
        <Footer />
      </LoginProvider>
    </Router>
  );
};

export default App;
