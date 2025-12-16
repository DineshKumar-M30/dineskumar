// src/components/Hero.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import IntroHeader from "./IntroHeader";
import PlanetSection from "./PlanetSection";
import ClickToOpen from "./ClickToOpen";
import InfoPanel from "./InfoPanel";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ProjectInfoPanel from "./ProjectInfoPanel";
import ExperienceSection from "./ExperienceSection";
import ExperienceInfoPanel from "./ExperienceInfoPanel";
import ContactPage from "./ContactPage";

import SocialBar from "./SocialBar";
import ScrollIndicator from "./ScrollIndicator";
import BackButton from "./backButton";

// NEW IMPORTS FOR RESPONSIVE MENU
import MenuButton from "./MenuButton";
import SideMenu from "./SideMenu";

export default function Hero() {
  const [open, setOpen] = useState(false); // Info panel
  const [skillsOpen, setSkillsOpen] = useState(false);

  const [projectsOpen, setProjectsOpen] = useState(false);
  const [projectInfoOpen, setProjectInfoOpen] = useState(false);

  const [experienceOpen, setExperienceOpen] = useState(false);
  const [experienceInfoOpen, setExperienceInfoOpen] = useState(false);

  const [contactOpen, setContactOpen] = useState(false);

  // NEW STATE FOR SIDE MENU
  const [menuOpen, setMenuOpen] = useState(false);

  // -------------------------------
  //   SCROLL LOGIC (Option A)
  // -------------------------------
  const handleScroll = () => {
    // Prevent scroll when info panel opened (otherwise overlap occurs)
    if (projectInfoOpen || experienceInfoOpen || contactOpen || open || menuOpen) return;

    if (!skillsOpen) {
      setSkillsOpen(true);
      return;
    }
    if (skillsOpen && !projectsOpen) {
      setProjectsOpen(true);
      return;
    }
    if (projectsOpen && !experienceOpen) {
      setExperienceOpen(true);
      return;
    }

    // OPTION A → STOP after experience section (do nothing)
  };

  // -------------------------------
  //   BACK BUTTON LOGIC
  // -------------------------------
  const handleBack = () => {
    if (menuOpen) return setMenuOpen(false); // Close menu first

    if (experienceInfoOpen) return setExperienceInfoOpen(false);
    if (experienceOpen) return setExperienceOpen(false);

    if (projectInfoOpen) return setProjectInfoOpen(false);
    if (projectsOpen) return setProjectsOpen(false);

    if (skillsOpen) return setSkillsOpen(false);

    if (open) return setOpen(false);

    if (contactOpen) return setContactOpen(false);

    // If nothing open → do nothing
  };

  // -------------------------------
  //   CONTACT LOGIC
  // -------------------------------
  const handleContactOpen = () => {
    // close every other panel
    setContactOpen(true);
    setOpen(false);
    setSkillsOpen(false);
    setProjectsOpen(false);
    setProjectInfoOpen(false);
    setExperienceOpen(false);
    setExperienceInfoOpen(false);
    setMenuOpen(false); // Close menu if open
  }

  // -------------------------------
  //   BACKGROUND SWITCHING
  // -------------------------------
  const bg = contactOpen
    ? "/assets/bg-contact.png"
    : experienceOpen || experienceInfoOpen
    ? "/assets/bg-space4.png"
    : projectsOpen || projectInfoOpen
    ? "/assets/bg-space3.png"
    : skillsOpen
    ? "/assets/bg-space1.png"
    : open
    ? "/assets/bg-info.png"
    : "/assets/bg-main.png";
    
  // Disable pointer events on the background when menu is open to prevent accidental clicks
  const sectionClass = menuOpen 
    ? "relative w-full min-h-screen overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out pointer-events-none"
    : "relative w-full min-h-screen overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out";

  return (
    <section
      className={sectionClass}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* ====================== UI ELEMENTS - Fixed/Absolute =========================== */}

      {/* CONTACT BUTTON / MENU BUTTON */}
      <div className="fixed top-6 right-6 z-[9999]">
        {/* On large screens, show the CONTACT ME button */}
        <button
          onClick={handleContactOpen}
          className="hidden lg:block px-5 py-2 text-sm tracking-wider border border-white/30 rounded-full neon-text hover:bg-white/10 transition"
        >
          CONTACT ME
        </button>
        {/* On smaller screens, show the menu button */}
        <div className="lg:hidden">
            <MenuButton onClick={() => setMenuOpen(!menuOpen)} open={menuOpen} />
        </div>
      </div>

      <SocialBar />
      <BackButton onBack={handleBack} />

      {/* Scroll hidden when: info panels, contact, or menu open */}
      {!contactOpen &&
        !projectInfoOpen &&
        !experienceInfoOpen &&
        !open && 
        !menuOpen && (
          <ScrollIndicator onScrollClick={handleScroll} />
        )}

      {/* HOME HEADER */}
      {!open &&
        !skillsOpen &&
        !projectsOpen &&
        !experienceOpen &&
        !contactOpen && 
        !menuOpen && <IntroHeader />}

      {/* ====================== ANIMATIONS =========================== */}
      <AnimatePresence mode="wait">
        {/* HOME */}
        {!open &&
          !skillsOpen &&
          !projectsOpen &&
          !experienceOpen &&
          !contactOpen && 
          !menuOpen && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0"
            >
<div
  className="
    absolute
    left-1/2
    -translate-x-1/2
    z-10
    bottom-32
    sm:bottom-40
    md:bottom-24
    lg:bottom-48
  "
>
  <PlanetSection setOpen={setOpen} />
</div>
            </motion.div>
          )}

        {/* INFO PANEL */}
        {open && !skillsOpen && !projectsOpen && !experienceOpen && !contactOpen && !menuOpen && (
          <motion.div
            key="info"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <InfoPanel />
          </motion.div>
        )}

        {/* SKILLS */}
        {skillsOpen && !projectsOpen && !experienceOpen && !contactOpen && !menuOpen && (
  <motion.div
    key="skills"
    initial={{ opacity: 0, y: 120 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -120 }}
    transition={{ duration: 0.6 }}
    className="absolute inset-0 z-20 overflow-y-auto"
  >
    <SkillsSection />
  </motion.div>
)}


        {/* PROJECTS */}
        {projectsOpen && !projectInfoOpen && !experienceOpen && !contactOpen && !menuOpen && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -140 }}
            transition={{ duration: 0.65 }}
            className="absolute inset-0 z-20"
          >
            <ProjectsSection onOpenInfo={() => setProjectInfoOpen(true)} />
          </motion.div>
        )}

        {/* PROJECT INFO */}
        {projectInfoOpen && !menuOpen && (
          <motion.div
            key="project-info"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-30"
          >
            <ProjectInfoPanel />
          </motion.div>
        )}

        {/* EXPERIENCE */}
        {experienceOpen && !experienceInfoOpen && !contactOpen && !menuOpen && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -140 }}
            transition={{ duration: 0.65 }}
            className="absolute inset-0 z-20"
          >
            <ExperienceSection onOpenInfo={() => setExperienceInfoOpen(true)} />
          </motion.div>
        )}

        {/* EXPERIENCE INFO */}
        {experienceInfoOpen && !menuOpen && (
          <motion.div
            key="experience-info"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-30"
          >
            <ExperienceInfoPanel />
          </motion.div>
        )}

        {/* CONTACT */}
        {contactOpen && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.65 }}
            className="absolute inset-0 z-40"
          >
            <ContactPage onBack={() => setContactOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* SIDE TOGGLE MENU */}
      <SideMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        onContactClick={handleContactOpen}
      />
    </section>
  );
}