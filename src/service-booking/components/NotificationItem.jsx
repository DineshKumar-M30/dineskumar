import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Gift, CreditCard, Calendar, CheckCircle } from 'lucide-react';

const NotificationItem = ({ notification, onClick }) => {
    const typeConfig = {
        booking: {
            icon: Calendar,
            color: 'text-blue-600 dark:text-blue-400',
            bgColor: 'bg-blue-100 dark:bg-blue-900/30'
        },
        status: {
            icon: CheckCircle,
            color: 'text-green-600 dark:text-green-400',
            bgColor: 'bg-green-100 dark:bg-green-900/30'
        },
        offer: {
            icon: Gift,
            color: 'text-purple-600 dark:text-purple-400',
            bgColor: 'bg-purple-100 dark:bg-purple-900/30'
        },
        payment: {
            icon: CreditCard,
            color: 'text-orange-600 dark:text-orange-400',
            bgColor: 'bg-orange-100 dark:bg-orange-900/30'
        }
    };

    const config = typeConfig[notification.type] || typeConfig.booking;
    const Icon = config.icon;

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 4 }}
            onClick={onClick}
            className={`
                flex gap-4 p-4 rounded-xl cursor-pointer transition-all
                ${notification.read
                    ? 'bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800'
                    : 'bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 border-l-4 border-purple-600'
                }
            `}
        >
            <div className={`w-12 h-12 rounded-full ${config.bgColor} flex items-center justify-center flex-shrink-0`}>
                <Icon size={20} className={config.color} />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className={`font-semibold ${notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>
                        {notification.title}
                    </h4>
                    {!notification.read && (
                        <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-1.5"></div>
                    )}
                </div>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-2 line-clamp-2">
                    {notification.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-500">
                    {formatTime(notification.timestamp)}
                </p>
            </div>
        </motion.div>
    );
};

export default NotificationItem;
