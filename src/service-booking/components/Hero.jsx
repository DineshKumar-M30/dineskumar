import React from 'react';
import { Search, MapPin, Star, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-black transition-colors duration-500">
                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/80 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Home services, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                on demand.
                            </span>
                        </h1>
                        <p className="text-lg text-gray-200 mb-8 max-w-lg">
                            Expert professionals for cleaning, repairs, salon, and more.
                            Trusted by millions for quality and safety.
                        </p>
                    </motion.div>

                    {/* Main Search Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="bg-white p-2 rounded-2xl shadow-2xl max-w-xl"
                    >
                        <div className="flex items-center">
                            <div className="flex-1 flex items-center px-4 border-r border-gray-200">
                                <MapPin className="text-gray-400 mr-2" size={20} />
                                <div className="flex flex-col py-2">
                                    <span className="text-xs text-gray-400 font-medium">Location</span>
                                    <span className="text-sm font-semibold text-gray-800">Delhi NCR</span>
                                </div>
                            </div>
                            <div className="flex-[2] flex items-center px-4">
                                <Search className="text-purple-600 mr-2" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search for 'AC Repair'..."
                                    className="w-full py-3 outline-none text-gray-800 placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Trending Pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 flex flex-wrap gap-3"
                    >
                        <span className="text-gray-300 text-sm font-medium mr-2">Trending:</span>
                        {['AC Service', 'Massage for Men', 'Home Cleaning'].map((tag, i) => (
                            <button key={i} className="px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white text-xs transition-colors border border-white/10">
                                {tag}
                            </button>
                        ))}
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mt-12 flex items-center gap-8 text-white/80"
                    >
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-green-500/20 rounded-full">
                                <Star size={16} className="text-green-400 fill-green-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white leading-none">4.8/5</span>
                                <span className="text-[10px] uppercase tracking-wider">Average Rating</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-blue-500/20 rounded-full">
                                <Shield size={16} className="text-blue-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white leading-none">Verified</span>
                                <span className="text-[10px] uppercase tracking-wider">Professionals</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
