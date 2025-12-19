import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import ServiceListing from './pages/ServiceListing';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import BookingStatus from './pages/BookingStatus';
import Dashboard from './pages/Dashboard';
import MyBookings from './pages/MyBookings';
import BookingDetails from './pages/BookingDetails';
import Profile from './pages/Profile';
import Payments from './pages/Payments';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import { BookingProvider } from './context/BookingContext';
import { UserProvider } from './context/UserContext';
import { Toaster } from 'react-hot-toast';

const ServiceBookingApp = () => {
    return (
        <UserProvider>
            <BookingProvider>
                <Toaster position="top-center" toastOptions={{
                    duration: 2000,
                    style: { background: '#333', color: '#fff' }
                }} />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="services/:category" element={<ServiceListing />} />
                        <Route path="service/:id" element={<ServiceDetail />} />
                        <Route path="booking" element={<Booking />} />
                        <Route path="bookings/:id" element={<BookingStatus />} />

                        {/* Dashboard Routes */}
                        <Route path="dashboard" element={<DashboardLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="bookings" element={<MyBookings />} />
                            <Route path="bookings/:id" element={<BookingDetails />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="payments" element={<Payments />} />
                            <Route path="notifications" element={<Notifications />} />
                            <Route path="settings" element={<Settings />} />
                        </Route>
                    </Route>
                </Routes>
            </BookingProvider>
        </UserProvider>
    );
};

export default ServiceBookingApp;
