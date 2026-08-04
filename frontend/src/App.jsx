import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GoatCounterTracker from "./components/GoatCounterTracker";
import Home from "./pages/Home";
import History from "./pages/History";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
// Contact page kept in codebase but not routed until the remote backend is ready.
// import Contact from "./pages/Contact";

// Vite sets BASE_URL from vite.config.js (e.g. "/personal_portfolio/" on Pages).
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function App() {
  return (
    <BrowserRouter basename={basename === "/" ? undefined : basename}>
      <ScrollToTop />
      <GoatCounterTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
