import React from "react";
import { motion } from "framer-motion";

export default function SideMenu({ isOpen, onClose, onContactClick }) {
  const socials = [
    { href: "https://github.com/", src: "/assets/icon-github.png", alt: "GitHub" },
    { href: "https://instagram.com/", src: "/assets/icon-instagram.png", alt: "Instagram" },
    { href: "https://www.linkedin.com/", src: "/assets/icon-linkedin.png", alt: "LinkedIn" },
    { href: "https://www.behance.net/", src: "/assets/icon-be.png", alt: "Behance" }
  ];

  const variants = {
    open: { x: 0 },
    closed: { x: "100%" }
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-full max-w-[300px] md:max-w-[400px] bg-black/80 backdrop-blur-xl z-[99999] p-8 lg:hidden pointer-events-auto"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:opacity-70 transition"
      >
        &times;
      </button>

      <div className="flex flex-col gap-10 mt-16">
        {/* CONTACT BUTTON */}
        <button
          onClick={() => {
            onClose();
            onContactClick();
          }}
          className="w-full px-5 py-3 text-lg tracking-wider border border-white/30 rounded-full neon-text hover:bg-white/10 transition"
        >
          CONTACT ME
        </button>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6 mt-6">
          <p className="neon-text text-sm uppercase tracking-widest">Connect</p>
          <div className="flex justify-center gap-6">
            {socials.map((s) => (
              <a key={s.alt} href={s.href} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition">
                <img src={s.src} alt={s.alt} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}