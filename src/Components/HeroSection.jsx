import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import ContactPage from "./ContactPage";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-cyan-900 overflow-hidden">
            {/* Background stars and planets */}
            <div className="absolute inset-0">
                {/* Stars */}
                {[...Array(50)].map((_, i) => (
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
            </div>

            {/* Contact Me Button - Top Right */}
            <div className="absolute top-8 right-8 z-20">
                <button
                    onClick={() => navigate('/contact')}
                    className="px-6 py-3 bg-purple-600/30 backdrop-blur-sm border border-purple-400/50 rounded-lg text-white font-semibold hover:bg-purple-600/50 transition-all"
                >
                    CONTACT ME
                </button>
            </div>

            {/* Social Media Icons - Left Side */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                <a
                    href="#"
                    className="w-12 h-12 bg-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600/50 transition-all"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="#"
                    className="w-12 h-12 bg-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600/50 transition-all"
                >
                    <FaInstagram size={24} />
                </a>
                <a
                    href="#"
                    className="w-12 h-12 bg-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600/50 transition-all"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="#"
                    className="w-12 h-12 bg-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600/50 transition-all"
                >
                    <FaBehance size={24} />
                </a>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                {/* Decorative Header */}
                <div className="flex items-center justify-center w-full max-w-3xl gap-4 mb-4">
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-400/50"></div>
                    <span className="text-cyan-400 text-sm tracking-widest uppercase whitespace-nowrap px-4">
                        A Message From Earth
                    </span>
                    <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-cyan-400/50 to-cyan-400/50"></div>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-2 tracking-wide">
                    <span className="text-outline">HELLO FELLOW GALAXY MEMBER</span>
                </h1>

                {/* Decorative Header Bottom */}
                <div className="flex items-center justify-center w-full max-w-2xl gap-4 mb-8">
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-400/50"></div>
                    <span className="text-cyan-400 text-sm tracking-widest uppercase whitespace-nowrap px-4">
                        A Message From Earth
                    </span>
                    <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-cyan-400/50 to-cyan-400/50"></div>
                </div>

                {/* Subheading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12 text-outline">
                    I AM JAY
                </h2>

                {/* Earth and Astronaut */}
                <div className="relative w-full max-w-2xl aspect-square mb-8">
                    {/* Earth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-700 shadow-2xl shadow-cyan-500/50">
                        {/* Earth continents - simplified */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-600/60 rounded-full blur-sm"></div>
                            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-600/60 rounded-full blur-sm"></div>
                            <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-green-600/60 rounded-full blur-sm"></div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                    </div>

                    {/* Astronaut */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                            {/* Astronaut body - simplified */}
                            <div className="w-20 h-24 bg-white rounded-2xl relative shadow-lg">
                                {/* Helmet */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-purple-900 rounded-full border-4 border-white"></div>
                                {/* Arms */}
                                <div className="absolute top-4 -left-4 w-4 h-12 bg-white rounded-full"></div>
                                <div className="absolute top-4 -right-4 w-4 h-12 bg-white rounded-full"></div>
                                {/* Legs */}
                                <div className="absolute -bottom-8 left-2 w-4 h-10 bg-white rounded-full"></div>
                                <div className="absolute -bottom-8 right-2 w-4 h-10 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Click to Open */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
                        <button className="group relative">
                            <div className="absolute inset-0 border-2 border-white/50 rounded-lg animate-pulse"></div>
                            <div className="relative px-8 py-4 bg-transparent backdrop-blur-sm">
                                <span className="text-white text-xl font-bold tracking-wider block">CLICK</span>
                                <span className="text-white text-xl font-bold tracking-wider block">TO OPEN</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Press Indicator - Bottom Left */}
            <div className="absolute bottom-8 left-8 flex items-center gap-3 text-white z-20">
                <div className="w-12 h-12 border-2 border-white/50 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">↵</span>
                </div>
                <span className="text-sm uppercase tracking-wider">Press</span>
            </div>

            {/* Scroll Indicator - Bottom Right */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3 text-white z-20 cursor-pointer" onClick={() => navigate('/projects')}>
                <span className="text-sm uppercase tracking-wider">Scroll</span>
                <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <span className="text-2xl animate-bounce">↓</span>
                </div>
            </div>

            {/* Floating planets */}
            <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-sm opacity-60 animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-600 rounded-full blur-sm opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
    );
}
