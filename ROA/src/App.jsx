import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./routes/Home";
import About from "./routes/About";
import Features from "./routes/Features";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Upload from "./routes/Upload";
import Quiz from "./routes/Quiz";
import Result from "./routes/Result";

import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
