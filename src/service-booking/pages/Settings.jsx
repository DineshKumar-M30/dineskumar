import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon, Bell, Mail, MessageSquare, Globe, LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const { settings, updateSettings, logout, theme, toggleTheme } = useUser();
    const navigate = useNavigate();

    const darkMode = theme === 'dark';

    const handleThemeToggle = () => {
        toggleTheme();
    };

    const handleNotificationToggle = (key) => {
        updateSettings({ [key]: !settings[key] });
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout();
            navigate('/');
        }
    };

    const [activeTab, setActiveTab] = useState('appearance');

    const tabs = [
        { id: 'appearance', label: 'Appearance', icon: Sun },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'account', label: 'Account', icon: LogOut },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Settings
                </h1>
                <p className="text-gray-600 dark:text-slate-400">
                    Manage your preferences and account settings
                </p>
            </div>

            {/* Settings Tabs */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Tab Navigation */}
                <div className="md:w-64 shrink-0 space-y-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const active = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${active
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                                    : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                                    }`}
                            >
                                <Icon size={20} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="flex-1">
                    <AnimatePresence mode="wait">
                        {activeTab === 'appearance' && (
                            <motion.div
                                key="appearance"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                        Appearance
                                    </h2>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                                {darkMode ? (
                                                    <Moon size={24} className="text-purple-600 dark:text-purple-400" />
                                                ) : (
                                                    <Sun size={24} className="text-purple-600 dark:text-purple-400" />
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                                    Dark Mode
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-slate-400">
                                                    {darkMode ? 'Dark theme is enabled' : 'Light theme is enabled'}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleThemeToggle}
                                            className={`relative w-14 h-7 rounded-full transition-colors ${darkMode ? 'bg-purple-600' : 'bg-gray-300'}`}
                                        >
                                            <motion.div
                                                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md"
                                                animate={{ x: darkMode ? 28 : 0 }}
                                            />
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                        Language
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                                            <Globe size={24} className="text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <select
                                            value={settings.language}
                                            onChange={(e) => updateSettings({ language: e.target.value })}
                                            className="flex-1 px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
                                        >
                                            <option value="en">English</option>
                                            <option value="hi">हिन्दी (Hindi)</option>
                                            <option value="ta">தமிழ் (Tamil)</option>
                                            <option value="te">తెలుగు (Telugu)</option>
                                        </select>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'notifications' && (
                            <motion.div
                                key="notifications"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800"
                            >
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    Notification Preferences
                                </h2>
                                <div className="divide-y divide-gray-100 dark:divide-slate-800">
                                    {[
                                        { id: 'emailNotifications', label: 'Email Notifications', icon: Mail, color: 'blue', desc: 'Receive booking updates via email' },
                                        { id: 'smsNotifications', label: 'SMS Notifications', icon: MessageSquare, color: 'green', desc: 'Receive booking updates via SMS' },
                                        { id: 'pushNotifications', label: 'Push Notifications', icon: Bell, color: 'orange', desc: 'Receive in-app notifications' }
                                    ].map((pref) => {
                                        const PrefIcon = pref.icon;
                                        return (
                                            <div key={pref.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 bg-${pref.color}-50 dark:bg-${pref.color}-900/20 rounded-lg flex items-center justify-center`}>
                                                        <PrefIcon size={20} className={`text-${pref.color}-600 dark:text-${pref.color}-400`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{pref.label}</h3>
                                                        <p className="text-xs text-gray-500 dark:text-slate-400">{pref.desc}</p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleNotificationToggle(pref.id)}
                                                    className={`relative w-12 h-6 rounded-full transition-colors ${settings[pref.id] ? 'bg-purple-600' : 'bg-gray-200 dark:bg-slate-700'}`}
                                                >
                                                    <motion.div
                                                        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"
                                                        animate={{ x: settings[pref.id] ? 24 : 0 }}
                                                    />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'account' && (
                            <motion.div
                                key="account"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800"
                            >
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    Account Actions
                                </h2>
                                <p className="text-gray-600 dark:text-slate-400 mb-8">
                                    Manage your account status and security.
                                </p>
                                <div className="p-6 border-2 border-dashed border-red-100 dark:border-red-900/30 rounded-2xl bg-red-50/30 dark:bg-red-900/5">
                                    <h3 className="text-red-900 dark:text-red-400 font-bold mb-2">Logout of Account</h3>
                                    <p className="text-sm text-red-600 dark:text-red-400/70 mb-6">
                                        You will be signed out of your current session. All your preferences are saved to your account.
                                    </p>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-lg shadow-red-600/20 active:scale-95 transition-all"
                                    >
                                        <LogOut size={20} />
                                        Logout
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Settings;
