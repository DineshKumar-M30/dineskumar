import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';
import { motion } from 'framer-motion';

const CategoryGrid = () => {
    return (
        <div className="py-8 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-header mb-8 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">What are you looking for?</h2>
                    <div className="h-1 w-20 bg-purple-600 mt-2 mx-auto md:mx-0 rounded-full"></div>
                </div>

                {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                <div className="flex overflow-x-auto pb-6 -mx-4 px-4 space-x-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-6 md:space-x-0 md:pb-0 scrollbar-hide snap-x">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-32 md:w-auto snap-center"
                        >
                            <Link to={`/services/${cat.id}`} className="block group">
                                <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-4 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-purple-100 dark:hover:border-purple-900/50 h-full flex flex-col items-center text-center gap-4">
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300 ring-2 ring-white dark:ring-slate-700">
                                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white leading-tight">
                                        {cat.name}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryGrid;
