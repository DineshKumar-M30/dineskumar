import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, XCircle, Clock, ArrowRight, CreditCard, User, Bell } from 'lucide-react';
import { useUser } from '../context/UserContext';
import StatCard from '../components/StatCard';
import BookingCard from '../components/BookingCard';
import { getBookingStats } from '../data/mockUserData';

const Dashboard = () => {
    const { user, bookings, notifications } = useUser();
    const stats = getBookingStats(bookings);
    const recentBookings = bookings.slice(0, 3);
    const unreadNotifications = notifications.filter(n => !n.read).length;

    const quickActions = [
        {
            title: 'My Bookings',
            description: 'View and manage all bookings',
            icon: Calendar,
            color: 'from-blue-500 to-blue-600',
            link: '/dashboard/bookings',
            count: stats.total
        },
        {
            title: 'Payments',
            description: 'Track your payments',
            icon: CreditCard,
            color: 'from-green-500 to-green-600',
            link: '/dashboard/payments'
        },
        {
            title: 'Profile',
            description: 'Edit your profile',
            icon: User,
            color: 'from-purple-500 to-purple-600',
            link: '/dashboard/profile'
        },
        {
            title: 'Notifications',
            description: 'Latest updates & offers',
            icon: Bell,
            color: 'from-orange-500 to-orange-600',
            link: '/dashboard/notifications',
            count: unreadNotifications
        }
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Welcome, {user.name.split(' ')[0]}!
                </h1>
                <p className="text-gray-600 dark:text-slate-400">
                    Manage your bookings and account details.
                </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={Calendar}
                    title="Total Bookings"
                    value={stats.total}
                    color="blue"
                />
                <StatCard
                    icon={Clock}
                    title="Upcoming Services"
                    value={stats.upcoming}
                    color="purple"
                />
                <StatCard
                    icon={CheckCircle}
                    title="Completed Services"
                    value={stats.completed}
                    color="green"
                />
                <StatCard
                    icon={XCircle}
                    title="Cancelled Bookings"
                    value={stats.cancelled}
                    color="red"
                />
            </div>

            {/* Dashboard Sections List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Side: Summary List */}
                <div className="lg:col-span-4 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        Summary Details
                        <div className="h-1 flex-1 bg-gray-100 dark:bg-slate-800 rounded-full"></div>
                    </h2>
                    <div className="space-y-4">
                        {quickActions.map((action, index) => {
                            const Icon = action.icon;
                            return (
                                <motion.div
                                    key={action.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={action.link}
                                        className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-900/50 hover:shadow-md transition-all group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-gray-900 dark:text-white truncate">
                                                    {action.title}
                                                </h3>
                                                {action.count > 0 && (
                                                    <span className="px-2 py-0.5 text-xs font-bold bg-purple-600 text-white rounded-full">
                                                        {action.count}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-slate-400 truncate">
                                                {action.description}
                                            </p>
                                        </div>
                                        <ArrowRight size={16} className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Recent Activity */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            Recent Bookings
                        </h2>
                        <Link
                            to="/dashboard/bookings"
                            className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                        >
                            View All
                        </Link>
                    </div>

                    {recentBookings.length > 0 ? (
                        <div className="space-y-4">
                            {recentBookings.map((booking, index) => (
                                <motion.div
                                    key={booking.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                >
                                    <BookingCard
                                        booking={booking}
                                        onViewDetails={(b) => window.location.href = `/dashboard/bookings/${b.id}`}
                                        onCancel={() => { }}
                                        onReschedule={() => { }}
                                        compact
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center border border-gray-100 dark:border-slate-800">
                            <p className="text-gray-500 dark:text-slate-400">No bookings yet</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
