import React from "react";

export default function SocialBar() {
  const socials = [
    { href: "https://github.com/", src: "/assets/icon-github.png", alt: "GitHub" },
    { href: "https://instagram.com/", src: "/assets/icon-instagram.png", alt: "Instagram" },
    { href: "https://www.linkedin.com/", src: "/assets/icon-linkedin.png", alt: "LinkedIn" },
    { href: "https://www.behance.net/", src: "/assets/icon-be.png", alt: "Behance" }
  ];

  return (
    <div className="absolute left-6 top-1/3 z-40 hidden lg:flex flex-col items-center gap-4">
      {socials.map((s, idx) => (
        <a key={s.alt} href={s.href} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition">
          <img src={s.src} alt={s.alt} className="w-6 h-6" />
        </a>
      ))}

      <div className="w-[1px] h-20 bg-white/10 mt-2"></div>
    </div>
  );
}
