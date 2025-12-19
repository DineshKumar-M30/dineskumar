import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUser, mockBookings, mockNotifications, mockPayments } from '../data/mockUserData';
import toast from 'react-hot-toast';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

const STORAGE_KEYS = {
    USER: 'urbanclone_user',
    BOOKINGS: 'urbanclone_bookings',
    NOTIFICATIONS: 'urbanclone_notifications',
    PAYMENTS: 'urbanclone_payments',
    SETTINGS: 'urbanclone_settings',
    THEME: 'theme'
};

export const UserProvider = ({ children }) => {
    // Initialize state from localStorage or use mock data
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.USER);
        return saved ? JSON.parse(saved) : mockUser;
    });

    const [bookings, setBookings] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
        return saved ? JSON.parse(saved) : mockBookings;
    });

    const [notifications, setNotifications] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
        return saved ? JSON.parse(saved) : mockNotifications;
    });

    const [payments, setPayments] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.PAYMENTS);
        return saved ? JSON.parse(saved) : mockPayments;
    });

    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        return saved ? JSON.parse(saved) : {
            emailNotifications: true,
            smsNotifications: true,
            pushNotifications: true,
            language: 'en'
        };
    });

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEYS.THEME);
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return saved || (prefersDark ? 'dark' : 'light');
        }
        return 'light';
    });

    // Persist to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    }, [bookings]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
    }, [notifications]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));
    }, [payments]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    }, [settings]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    // User profile methods
    const updateProfile = (updates) => {
        setUser(prev => ({ ...prev, ...updates }));
        toast.success('Profile updated successfully');
    };

    const updateProfileImage = (imageUrl) => {
        setUser(prev => ({ ...prev, profileImage: imageUrl }));
        toast.success('Profile image updated');
    };

    // Address methods
    const addAddress = (address) => {
        const newAddress = {
            ...address,
            id: `addr-${Date.now()}`,
            isDefault: user.addresses.length === 0
        };
        setUser(prev => ({
            ...prev,
            addresses: [...prev.addresses, newAddress]
        }));
        toast.success('Address added successfully');
    };

    const updateAddress = (addressId, updates) => {
        setUser(prev => ({
            ...prev,
            addresses: prev.addresses.map(addr =>
                addr.id === addressId ? { ...addr, ...updates } : addr
            )
        }));
        toast.success('Address updated successfully');
    };

    const deleteAddress = (addressId) => {
        setUser(prev => ({
            ...prev,
            addresses: prev.addresses.filter(addr => addr.id !== addressId)
        }));
        toast.success('Address deleted successfully');
    };

    const setDefaultAddress = (addressId) => {
        setUser(prev => ({
            ...prev,
            addresses: prev.addresses.map(addr => ({
                ...addr,
                isDefault: addr.id === addressId
            }))
        }));
    };

    // Booking methods
    const addBooking = (booking) => {
        const newBooking = {
            ...booking,
            id: `BK${String(bookings.length + 1).padStart(3, '0')}`,
            bookingDate: new Date().toISOString(),
            status: 'Booked'
        };
        setBookings(prev => [newBooking, ...prev]);

        // Add notification
        addNotification({
            type: 'booking',
            title: 'Booking Confirmed',
            message: `Your booking for ${booking.serviceName} has been confirmed for ${booking.date}, ${booking.time}`,
            bookingId: newBooking.id
        });

        // Add payment record
        const payment = {
            id: `PAY${String(payments.length + 1).padStart(3, '0')}`,
            bookingId: newBooking.id,
            serviceName: booking.serviceName,
            amount: booking.finalPrice,
            date: new Date().toISOString().split('T')[0],
            method: booking.paymentMethod,
            status: booking.paymentStatus,
            transactionId: booking.paymentMethod === 'UPI' ? `TXN${Date.now()}` : null
        };
        setPayments(prev => [payment, ...prev]);

        return newBooking;
    };

    const updateBooking = (bookingId, updates) => {
        setBookings(prev => prev.map(booking =>
            booking.id === bookingId ? { ...booking, ...updates } : booking
        ));
    };

    const cancelBooking = (bookingId, reason) => {
        const booking = bookings.find(b => b.id === bookingId);
        if (!booking) return;

        setBookings(prev => prev.map(b =>
            b.id === bookingId ? {
                ...b,
                status: 'Cancelled',
                cancelledDate: new Date().toISOString(),
                cancellationReason: reason
            } : b
        ));

        // Update payment status
        setPayments(prev => prev.map(p =>
            p.bookingId === bookingId ? { ...p, status: 'Refunded' } : p
        ));

        // Add notification
        addNotification({
            type: 'booking',
            title: 'Booking Cancelled',
            message: `Your booking for ${booking.serviceName} has been cancelled`,
            bookingId: bookingId
        });

        toast.success('Booking cancelled successfully');
    };

    const rescheduleBooking = (bookingId, newDate, newTime) => {
        const booking = bookings.find(b => b.id === bookingId);
        if (!booking) return;

        setBookings(prev => prev.map(b =>
            b.id === bookingId ? { ...b, date: newDate, time: newTime } : b
        ));

        // Add notification
        addNotification({
            type: 'booking',
            title: 'Booking Rescheduled',
            message: `Your booking for ${booking.serviceName} has been rescheduled to ${newDate}, ${newTime}`,
            bookingId: bookingId
        });

        toast.success('Booking rescheduled successfully');
    };

    const rateBooking = (bookingId, rating, review) => {
        setBookings(prev => prev.map(b =>
            b.id === bookingId ? { ...b, rating, review } : b
        ));
        toast.success('Thank you for your feedback!');
    };

    // Notification methods
    const addNotification = (notification) => {
        const newNotification = {
            ...notification,
            id: `notif-${Date.now()}`,
            timestamp: new Date().toISOString(),
            read: false
        };
        setNotifications(prev => [newNotification, ...prev]);
    };

    const markNotificationAsRead = (notificationId) => {
        setNotifications(prev => prev.map(n =>
            n.id === notificationId ? { ...n, read: true } : n
        ));
    };

    const markAllNotificationsAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
        toast.success('All notifications marked as read');
    };

    const clearAllNotifications = () => {
        setNotifications([]);
        toast.success('All notifications cleared');
    };

    // Settings methods
    const updateSettings = (updates) => {
        setSettings(prev => ({ ...prev, ...updates }));
        toast.success('Settings updated successfully');
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    // Logout
    const logout = () => {
        // Clear all data
        localStorage.removeItem(STORAGE_KEYS.USER);
        localStorage.removeItem(STORAGE_KEYS.BOOKINGS);
        localStorage.removeItem(STORAGE_KEYS.NOTIFICATIONS);
        localStorage.removeItem(STORAGE_KEYS.PAYMENTS);
        localStorage.removeItem(STORAGE_KEYS.SETTINGS);
        localStorage.removeItem(STORAGE_KEYS.THEME);

        // Reset to mock data
        setUser(mockUser);
        setBookings(mockBookings);
        setNotifications(mockNotifications);
        setPayments(mockPayments);
        setSettings({
            emailNotifications: true,
            smsNotifications: true,
            pushNotifications: true,
            language: 'en'
        });
        setTheme('light');

        toast.success('Logged out successfully');
    };

    const value = {
        // State
        user,
        bookings,
        notifications,
        payments,
        settings,
        theme,

        // User methods
        updateProfile,
        updateProfileImage,

        // Address methods
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,

        // Booking methods
        addBooking,
        updateBooking,
        cancelBooking,
        rescheduleBooking,
        rateBooking,

        // Notification methods
        addNotification,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        clearAllNotifications,

        // Settings methods
        updateSettings,
        toggleTheme,

        // Auth
        logout
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
