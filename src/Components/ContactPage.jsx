import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        content: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-cyan-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                {/* Stars */}
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}

                {/* Glowing particles */}
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute bottom-32 left-32 w-12 h-12 bg-yellow-300 rounded-full blur-lg opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-40 right-20 w-20 h-20 bg-yellow-500 rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Floating orbs */}
                <div className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-full blur-sm opacity-50 animate-pulse"></div>
                <div className="absolute top-20 right-40 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-md opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Go Back Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 flex items-center gap-2 text-white text-lg font-semibold hover:text-cyan-400 transition-colors z-20"
            >
                <span>&lt;</span>
                <span className="uppercase tracking-wider">Go Back</span>
            </button>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
                {/* Header with decorative lines */}
                <div className="flex items-center justify-center w-full max-w-2xl gap-4 mb-12">
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-400/50"></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider whitespace-nowrap px-6 text-outline">
                        Contact Me
                    </h1>
                    <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-cyan-400/50 to-cyan-400/50"></div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
                    {/* Email Field */}
                    <div className="flex items-center gap-4">
                        <label className="text-white font-semibold uppercase tracking-wider min-w-[120px] text-right">
                            Email :
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jayentharasjstudio@gmail.com"
                            className="flex-1 px-6 py-4 bg-purple-900/30 backdrop-blur-sm border border-purple-400/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 transition-all"
                            required
                        />
                    </div>

                    {/* Subject Field */}
                    <div className="flex items-center gap-4">
                        <label className="text-white font-semibold uppercase tracking-wider min-w-[120px] text-right">
                            Subject :
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Something Something"
                            className="flex-1 px-6 py-4 bg-purple-900/30 backdrop-blur-sm border border-purple-400/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 transition-all"
                            required
                        />
                    </div>

                    {/* Content Field */}
                    <div className="flex items-start gap-4">
                        <label className="text-white font-semibold uppercase tracking-wider min-w-[120px] text-right pt-4">
                            Content :
                        </label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Something Something Something Something Something Something Something Something Something Something Something Something Something"
                            rows="6"
                            className="flex-1 px-6 py-4 bg-purple-900/30 backdrop-blur-sm border border-purple-400/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 transition-all resize-none"
                            required
                        />
                    </div>

                    {/* Submit Button (optional, not in image but useful) */}
                    <div className="flex justify-center pt-6">
                        <button
                            type="submit"
                            className="px-12 py-4 bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400/50 rounded-lg text-white font-bold uppercase tracking-wider hover:bg-cyan-500/30 hover:border-cyan-400 transition-all"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-6 mt-12">
                    <a
                        href="#"
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-900 hover:scale-110 transition-transform"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="#"
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-900 hover:scale-110 transition-transform"
                    >
                        <FaInstagram size={28} />
                    </a>
                    <a
                        href="#"
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-900 hover:scale-110 transition-transform"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="#"
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-900 hover:scale-110 transition-transform"
                    >
                        <FaBehance size={28} />
                    </a>
                </div>
            </div>

            {/* Underwater landscape silhouettes */}
            <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
                {/* Rock formations */}
                <div className="absolute bottom-0 left-10 w-32 h-48 bg-gradient-to-t from-black/80 to-transparent" style={{ clipPath: 'polygon(30% 100%, 0% 100%, 50% 0%)' }}></div>
                <div className="absolute bottom-0 left-40 w-24 h-40 bg-gradient-to-t from-black/70 to-transparent" style={{ clipPath: 'polygon(40% 100%, 0% 100%, 60% 0%)' }}></div>
                <div className="absolute bottom-0 right-20 w-40 h-56 bg-gradient-to-t from-black/80 to-transparent" style={{ clipPath: 'polygon(20% 100%, 0% 100%, 70% 0%)' }}></div>
                <div className="absolute bottom-0 right-60 w-28 h-44 bg-gradient-to-t from-black/70 to-transparent" style={{ clipPath: 'polygon(35% 100%, 0% 100%, 65% 0%)' }}></div>
            </div>
        </div>
    );
}
