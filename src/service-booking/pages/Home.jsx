import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/mockData';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const Home = () => {
    // Get top rated services for "Most Booked" section
    const popularServices = services
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    return (
        <div className="pb-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <Hero />
            <CategoryGrid />

            {/* Popular Services Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="text-purple-600" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Most Booked Services
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-slate-400">Trusted by thousands of customers</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ServiceCard service={service} showBadge={index === 0} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Trust Section */}
            <div className="bg-white dark:bg-slate-900 py-16 mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '10M+', label: 'Happy Customers' },
                            { value: '50K+', label: 'Verified Professionals' },
                            { value: '4.8★', label: 'Average Rating' },
                            { value: '100+', label: 'Cities Covered' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-600 dark:text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
