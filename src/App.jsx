import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleActive = (name) => {
    setActive(name);
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-600 fixed top-0 left-0 w-full shadow-lg z-50 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold cursor-pointer">NovaAI</h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-8 items-center">
          {[
            { name: "home", label: "Home" },
            { name: "about", label: "About" },
            { name: "services", label: "Services" },
            { name: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleActive(item.name)}
              className={`hover:text-gray-200 transition ${
                active === item.name ? "underline font-semibold" : ""
              }`}
            >
              {item.label}
            </button>
          ))}

          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-2/3 bg-blue-700 bg-opacity-95 backdrop-blur-md transform transition-transform duration-300 ease-in-out p-6 flex flex-col gap-6 text-white shadow-xl z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        {[
          { name: "home", label: "Home" },
          { name: "about", label: "About" },
          { name: "services", label: "Services" },
          { name: "contact", label: "Contact" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => handleActive(item.name)}
            className={`text-lg font-medium border-b pb-2 transition ${
              active === item.name ? "text-yellow-300" : ""
            }`}
          >
            {item.label}
          </button>
        ))}

        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition mt-4">
          Get Started
        </button>
      </div>

      {/* Dark Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}