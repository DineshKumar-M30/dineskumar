import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Trash2 } from 'lucide-react';
import { useUser } from '../context/UserContext';
import NotificationItem from '../components/NotificationItem';

const Notifications = () => {
    const { notifications, markNotificationAsRead, markAllNotificationsAsRead, clearAllNotifications } = useUser();

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleNotificationClick = (notification) => {
        if (!notification.read) {
            markNotificationAsRead(notification.id);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Notifications
                    </h1>
                    <p className="text-gray-600 dark:text-slate-400">
                        {unreadCount > 0
                            ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                            : 'You\'re all caught up!'}
                    </p>
                </div>

                {notifications.length > 0 && (
                    <div className="flex gap-2">
                        {unreadCount > 0 && (
                            <button
                                onClick={markAllNotificationsAsRead}
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium whitespace-nowrap"
                            >
                                Mark all as read
                            </button>
                        )}
                        <button
                            onClick={() => {
                                if (window.confirm('Are you sure you want to clear all notifications?')) {
                                    clearAllNotifications();
                                }
                            }}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium whitespace-nowrap flex items-center gap-2"
                        >
                            <Trash2 size={16} />
                            Clear All
                        </button>
                    </div>
                )}
            </div>

            {/* Notifications List */}
            {notifications.length > 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden">
                    <div className="divide-y divide-gray-200 dark:divide-slate-800">
                        {notifications.map((notification, index) => (
                            <div key={notification.id}>
                                <NotificationItem
                                    notification={notification}
                                    onClick={() => handleNotificationClick(notification)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-gray-200 dark:border-slate-800"
                >
                    <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bell size={40} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        No notifications
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                        You don't have any notifications right now
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default Notifications;
