// src/components/SkillsSection.jsx
import React from "react";

export default function SkillsSection() {
  const skills = Array(16).fill("ReactJS");

  return (
    <section
      className="
        relative
        w-full
        z-[60]
        animate-fadeIn
        flex
        flex-col
        items-center
        px-4
        pt-24
        pb-40
        sm:pt-28
        sm:pb-48
        md:pt-32
        md:pb-56
      "
    >
      {/* TITLE */}
      <h1 className="neon-text outlined text-2xl sm:text-3xl md:text-4xl tracking-widest mb-4 text-center">
        MY SKILLS
      </h1>

      {/* SUBTITLE */}
      <p className="neon-text text-sm sm:text-base md:text-lg tracking-wide mb-8 text-center max-w-xl">
        HERE IS A LIST OF SOME OF MY SKILLS
      </p>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          xs:grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-4
          sm:gap-6
          w-full
          max-w-5xl
        "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-white/10
              border
              border-white/30
              rounded-xl
              py-3
              text-sm
              sm:text-base
              text-white
              text-center
              backdrop-blur
              shadow-[0_0_18px_rgba(178,140,255,0.25)]
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

