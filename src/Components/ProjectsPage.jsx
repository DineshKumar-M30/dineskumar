import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
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

            {/* Contact Me - Top Right */}
            <div className="absolute top-8 right-8 z-20">
                <button className="text-white font-bold uppercase tracking-wider text-sm md:text-base">
                    CONTACT ME
                </button>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 w-full">

                {/* Header */}
                <div className="flex flex-col items-center justify-center w-full max-w-md gap-2 mb-8">
                    <div className="w-full h-[1px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest text-outline py-2">
                        MY PROJECTS
                    </h1>
                    <div className="w-full h-[1px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                </div>

                {/* Project Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 text-outline">
                    PROJECT 1 : DOC-UDI
                </h2>

                {/* Central Visual & Card */}
                <div className="relative w-full max-w-5xl flex items-center justify-center">

                    {/* Left Arrow */}
                    <button className="hidden md:block absolute left-0 text-white hover:text-cyan-400 transition-colors z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Earth and Astronaut Container */}
                    <div className="relative w-full max-w-2xl aspect-square flex flex-col items-center justify-end">

                        {/* Astronaut (simplified placeholder matching hero) */}
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="w-16 h-20 bg-white rounded-2xl relative shadow-lg">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-purple-900 rounded-full border-4 border-white"></div>
                                <div className="absolute top-4 -left-3 w-3 h-10 bg-white rounded-full"></div>
                                <div className="absolute top-4 -right-3 w-3 h-10 bg-white rounded-full"></div>
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-orange-500 text-[10px] flex items-center justify-center font-bold">$</div>
                            </div>
                        </div>

                        {/* Earth */}
                        <div className="w-full h-full rounded-full bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.6)] relative overflow-hidden translate-y-1/3">
                            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
                        </div>

                        {/* Glassmorphism Details Card */}
                        <div className="absolute bottom-1/4 z-20 w-[90%] md:w-[80%] bg-blue-900/30 backdrop-blur-md border border-purple-500/50 rounded-lg p-6 md:p-8 flex flex-col gap-4 text-center">
                            <div className="flex justify-center mb-2">
                                <FaGithub className="text-3xl text-white" />
                            </div>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            </p>

                            {/* Card Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button className="hidden md:block absolute right-0 text-white hover:text-cyan-400 transition-colors z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                </div>
            </div>

            {/* Floating Rocks / Monoliths (Decorative) */}
            <div className="absolute top-1/4 left-10 w-16 h-32 bg-gray-800 opacity-60 mix-blend-multiply polygon-rock transform rotate-12 animate-pulse"></div>
            <div className="absolute top-1/3 right-20 w-24 h-40 bg-gray-800 opacity-60 mix-blend-multiply polygon-rock-2 transform -rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>


            {/* Press Indicator - Bottom Left */}
            <div className="absolute bottom-8 left-8 flex flex-col items-center gap-2 text-white z-20">
                <span className="text-sm uppercase tracking-wider font-bold">PRESS</span>
                <div className="w-12 h-12 border-2 border-purple-400 rounded-lg flex items-center justify-center shadow-[0_0_10px_#a855f7]">
                    <span className="text-2xl">↵</span>
                </div>
            </div>

            {/* Scroll Indicator - Bottom Right */}
            <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white z-20">
                <span className="text-sm uppercase tracking-wider font-bold">SCROLL</span>
                <div className="w-12 h-12 border-2 border-purple-400 rounded-full flex items-center justify-center shadow-[0_0_10px_#a855f7]">
                    <span className="text-2xl animate-bounce">↕</span>
                </div>
            </div>

            <style>{`
                .polygon-rock { clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%); }
                .polygon-rock-2 { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
            `}</style>
        </div>
    );
}
