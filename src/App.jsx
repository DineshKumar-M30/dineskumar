import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import ContactPage from "./Components/ContactPage";
import ProjectsPage from "./Components/ProjectsPage";

export default function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}