import React, { createContext, useContext, useState, useMemo } from 'react';
import toast from 'react-hot-toast';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [bookingDetails, setBookingDetails] = useState({
        date: null,
        time: null,
        address: null,
        paymentMethod: 'UPI'
    });

    const addToCart = (service) => {
        setCart((prev) => {
            // Check if already in cart
            if (prev.find((item) => item.id === service.id)) {
                toast.error("Already in cart!");
                return prev;
            }
            toast.success("Added to cart!");
            return [...prev, service];
        });
    };

    const removeFromCart = (serviceId) => {
        setCart((prev) => prev.filter((item) => item.id !== serviceId));
        toast.success("Removed from cart");
    };

    const updateBookingDetails = (updates) => {
        setBookingDetails((prev) => ({ ...prev, ...updates }));
    };

    const clearCart = () => setCart([]);

    const [discount, setDiscount] = useState(0);

    const applyCoupon = (code) => {
        if (code.toUpperCase() === 'WELCOME50') {
            setDiscount(50);
            toast.success("Coupon Applied: ₹50 OFF");
            return true;
        } else if (code.toUpperCase() === 'URBAN100') {
            setDiscount(100);
            toast.success("Coupon Applied: ₹100 OFF");
            return true;
        } else {
            toast.error("Invalid Coupon Code");
            return false;
        }
    };

    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price, 0);
    }, [cart]);

    const finalTotal = Math.max(0, cartTotal - discount);

    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        bookingDetails,
        updateBookingDetails,
        cartTotal,
        discount,
        applyCoupon,
        finalTotal
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};
