import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, title, value, color, trend, trendValue }) => {
    const colorClasses = {
        blue: 'from-blue-500 to-blue-600',
        purple: 'from-purple-500 to-purple-600',
        green: 'from-green-500 to-green-600',
        red: 'from-red-500 to-red-600',
        orange: 'from-orange-500 to-orange-600',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-shadow"
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 dark:text-slate-400 mb-2">
                        {title}
                    </p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {value}
                    </h3>
                    {trend && (
                        <p className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {trend === 'up' ? '↑' : '↓'} {trendValue}
                        </p>
                    )}
                </div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center shadow-lg`}>
                    <Icon size={28} className="text-white" />
                </div>
            </div>
        </motion.div>
    );
};

export default StatCard;
