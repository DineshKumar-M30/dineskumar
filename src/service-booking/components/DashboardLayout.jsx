import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Calendar,
    CreditCard,
    User,
    Bell,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, notifications, logout } = useUser();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const unreadCount = notifications.filter(n => !n.read).length;

    const menuItems = [
        { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/dashboard/bookings', icon: Calendar, label: 'My Bookings' },
        { path: '/dashboard/payments', icon: CreditCard, label: 'Payments' },
        { path: '/dashboard/profile', icon: User, label: 'Profile' },
        { path: '/dashboard/notifications', icon: Bell, label: 'Notifications', badge: unreadCount },
        { path: '/dashboard/settings', icon: Settings, label: 'Settings' },
    ];

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout();
            navigate('/');
        }
    };

    const isActive = (path) => {
        if (path === '/dashboard') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-20">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-24 left-4 z-50 p-2 bg-white dark:bg-slate-900 rounded-lg shadow-lg"
            >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay for mobile */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{
                    x: (typeof window !== 'undefined' && window.innerWidth >= 1024) ? 0 : (sidebarOpen ? 0 : '-100%')
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className={`
                    fixed top-20 left-0 h-[calc(100vh-5rem)] w-72 bg-white dark:bg-slate-900 
                    border-r border-gray-200 dark:border-slate-800 z-40
                    lg:translate-x-0 transition-transform duration-300
                `}
            >
                <div className="flex flex-col h-full">
                    {/* User Profile Section */}
                    <div className="p-6 border-b border-gray-200 dark:border-slate-800">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {user.profileImage ? (
                                    <img src={user.profileImage} alt={user.name} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    user.name.charAt(0)
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                                    Hi, {user.name.split(' ')[0]}!
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-slate-400 truncate">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex-1 overflow-y-auto p-4">
                        <ul className="space-y-2">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.path);

                                return (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setSidebarOpen(false)}
                                            className={`
                                                flex items-center gap-3 px-4 py-3 rounded-xl font-medium
                                                transition-all duration-200 group relative
                                                ${active
                                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                                                    : 'text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                                                }
                                            `}
                                        >
                                            <Icon size={20} className={active ? 'text-white' : 'text-gray-500 dark:text-slate-400 group-hover:text-purple-600'} />
                                            <span className="flex-1">{item.label}</span>

                                            {item.badge > 0 && (
                                                <span className="px-2 py-0.5 text-xs font-bold bg-red-500 text-white rounded-full">
                                                    {item.badge}
                                                </span>
                                            )}

                                            {active && (
                                                <ChevronRight size={18} className="text-white" />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Logout Button */}
                    <div className="p-4 border-t border-gray-200 dark:border-slate-800">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </motion.aside>

            {/* Main Content */}
            <div className="lg:ml-72 min-h-[calc(100vh-5rem)]">
                <div className="p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
