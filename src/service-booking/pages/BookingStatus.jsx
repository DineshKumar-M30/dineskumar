import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Calendar, Phone, User, Download, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom confetti component using CSS
const ConfettiPiece = ({ delay, left }) => (
    <div
        className="absolute w-2 h-2 animate-confetti"
        style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            backgroundColor: ['#7C3AED', '#EC4899', '#10B981', '#F59E0B', '#3B82F6'][Math.floor(Math.random() * 5)]
        }}
    />
);

const CustomConfetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {[...Array(50)].map((_, i) => (
            <ConfettiPiece key={i} delay={i * 0.05} left={Math.random() * 100} />
        ))}
    </div>
);

const BookingStatus = () => {
    const { id } = useParams();
    const [showConfetti, setShowConfetti] = useState(true);
    const [eta, setEta] = useState(45 * 60); // 45 minutes in seconds

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const countdown = setInterval(() => {
            setEta(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => clearInterval(countdown);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-screen py-12 px-4 transition-colors duration-300">
            {showConfetti && <CustomConfetti />}

            <div className="max-w-3xl mx-auto">
                {/* Success Animation */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <CheckCircle size={64} className="text-white" strokeWidth={2.5} />
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-3"
                    >
                        Booking Confirmed!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-600 dark:text-slate-400 text-lg"
                    >
                        Booking ID: <span className="font-mono font-bold text-purple-600 dark:text-purple-400">#{id}</span>
                    </motion.p>
                </motion.div>

                {/* ETA Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 mb-8 shadow-2xl"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-purple-100 mb-2">Estimated Arrival</p>
                            <p className="text-5xl font-bold">{formatTime(eta)}</p>
                            <p className="text-purple-100 mt-2">Professional on the way</p>
                        </div>
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                            <Clock size={48} />
                        </div>
                    </div>
                </motion.div>

                {/* Tracking Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 mb-8 shadow-xl"
                >
                    <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Booking Status</h3>
                    <div className="space-y-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-gray-200 dark:to-slate-700"></div>

                        {/* Status Steps */}
                        {[
                            { icon: CheckCircle, title: 'Booking Confirmed', desc: 'Your booking has been confirmed', time: 'Just now', status: 'complete' },
                            { icon: User, title: 'Professional Assigned', desc: 'Rajesh Kumar - 4.9★ (2.5k reviews)', time: '2 mins ago', status: 'complete' },
                            { icon: MapPin, title: 'On the Way', desc: 'Professional is heading to your location', time: 'In progress', status: 'active' },
                            { icon: CheckCircle, title: 'Service Started', desc: 'Scheduled for your selected time', time: 'Pending', status: 'pending' }
                        ].map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div key={idx} className="relative flex items-start gap-4 pl-12">
                                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center z-10 shadow-lg ${step.status === 'complete' ? 'bg-green-500' :
                                        step.status === 'active' ? 'bg-blue-500 animate-pulse' :
                                            'bg-gray-200 dark:bg-slate-700'
                                        }`}>
                                        <Icon size={16} className={step.status === 'pending' ? 'text-gray-400 dark:text-slate-500' : 'text-white'} />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-semibold ${step.status === 'pending' ? 'text-gray-400 dark:text-slate-500' : 'text-gray-900 dark:text-white'}`}>
                                            {step.title}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">{step.desc}</p>
                                        <p className="text-xs text-gray-400 dark:text-slate-500 mt-1">{step.time}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Booking Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 mb-8 shadow-xl"
                >
                    <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Booking Details</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                <Calendar size={20} className="text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-slate-400">Date & Time</p>
                                <p className="font-semibold text-gray-900 dark:text-white">Today, 3:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-slate-400">Service Address</p>
                                <p className="font-semibold text-gray-900 dark:text-white">A-402, Green Valley, Sector 18, Noida</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone size={20} className="text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-slate-400">Contact Number</p>
                                <p className="font-semibold text-gray-900 dark:text-white">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="grid grid-cols-2 gap-4 mb-8"
                >
                    <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-2xl font-semibold text-gray-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-md hover:shadow-lg">
                        <Download size={20} />
                        Download Invoice
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-2xl font-semibold text-gray-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-md hover:shadow-lg">
                        <Share2 size={20} />
                        Share Details
                    </button>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-center"
                >
                    <Link
                        to="/service-booking"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105"
                    >
                        Book Another Service
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-4">
                        Need help? <a href="#" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">Contact Support</a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default BookingStatus;
