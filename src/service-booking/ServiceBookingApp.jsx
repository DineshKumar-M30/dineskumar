import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceListing from './pages/ServiceListing';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import BookingStatus from './pages/BookingStatus';
import { BookingProvider } from './context/BookingContext';
import { Toaster } from 'react-hot-toast';

const ServiceBookingApp = () => {
    return (
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
                    <Route path="bookings" element={<BookingStatus />} />
                    <Route path="bookings/:id" element={<BookingStatus />} />
                </Route>
            </Routes>
        </BookingProvider>
    );
};

export default ServiceBookingApp;
