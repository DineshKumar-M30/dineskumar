import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { ChevronLeft, Calendar, MapPin, CreditCard, CheckCircle, Trash2, Plus, Tag, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = [
    { id: 1, title: 'Cart', icon: CheckCircle },
    { id: 2, title: 'Schedule', icon: Calendar },
    { id: 3, title: 'Address', icon: MapPin },
    { id: 4, title: 'Payment', icon: CreditCard },
];

const Booking = () => {
    const {
        cart,
        removeFromCart,
        cartTotal,
        updateBookingDetails,
        bookingDetails,
        discount,
        applyCoupon,
        finalTotal,
        clearCart
    } = useBooking();
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const navigate = useNavigate();

    // Mock add-ons
    const addons = [
        { id: 'addon-1', name: 'Deep Cleaning Add-on', price: 299 },
        { id: 'addon-2', name: 'Sanitization Service', price: 199 },
        { id: 'addon-3', name: 'Extended Warranty', price: 499 }
    ];

    const toggleAddon = (addon) => {
        setSelectedAddons(prev =>
            prev.find(a => a.id === addon.id)
                ? prev.filter(a => a.id !== addon.id)
                : [...prev, addon]
        );
    };

    const addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);

    // Step 1: Cart Review with Add-ons
    const CartStep = () => (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Review your services</h2>
                {cart.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 dark:bg-slate-800 rounded-2xl">
                        <div className="text-gray-400 dark:text-slate-500 mb-4">
                            <svg className="w-20 h-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <p className="text-lg font-semibold text-gray-700 dark:text-slate-300 mb-2">Your cart is empty</p>
                        <button onClick={() => navigate('/service-booking')} className="mt-4 px-6 py-2 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors">
                            Browse Services
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {cart.map(item => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex gap-4 border border-gray-200 dark:border-slate-700 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-20 h-20 bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden flex-shrink-0">
                                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1">{item.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{item.time}</p>
                                    <p className="text-lg font-bold text-purple-600 dark:text-purple-400 mt-2">₹{item.price}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2">
                                    <Trash2 size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add-ons Section */}
            {cart.length > 0 && (
                <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                        <Plus size={20} className="text-purple-600" />
                        Frequently added together
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                        {addons.map(addon => {
                            const isSelected = selectedAddons.find(a => a.id === addon.id);
                            return (
                                <button
                                    key={addon.id}
                                    onClick={() => toggleAddon(addon)}
                                    className={`p-4 rounded-xl border-2 text-left transition-all ${isSelected
                                            ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20'
                                            : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-purple-300 dark:hover:border-purple-700'
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <span className="font-semibold text-gray-900 dark:text-white text-sm">{addon.name}</span>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-purple-600 bg-purple-600' : 'border-gray-300 dark:border-slate-600'
                                            }`}>
                                            {isSelected && <CheckCircle size={12} className="text-white" />}
                                        </div>
                                    </div>
                                    <p className="text-purple-600 dark:text-purple-400 font-bold">+₹{addon.price}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );

    // Step 2: Modern Date & Time Picker
    const ScheduleStep = () => {
        const dates = Array.from({ length: 7 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() + i);
            return {
                day: d.toLocaleDateString('en-US', { weekday: 'short' }),
                date: d.getDate(),
                month: d.toLocaleDateString('en-US', { month: 'short' }),
                value: d.toISOString().split('T')[0],
                isToday: i === 0
            };
        });

        const timeSlots = [
            { time: '09:00 AM', available: true },
            { time: '11:00 AM', available: true },
            { time: '01:00 PM', available: false },
            { time: '03:00 PM', available: true },
            { time: '05:00 PM', available: true },
            { time: '07:00 PM', available: true }
        ];

        return (
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Select Date</h3>
                    <div className="grid grid-cols-7 gap-2">
                        {dates.map(date => (
                            <button
                                key={date.value}
                                onClick={() => updateBookingDetails({ date: date.value })}
                                className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all ${bookingDetails.date === date.value
                                        ? 'border-purple-600 bg-purple-600 text-white shadow-lg scale-105'
                                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-700'
                                    }`}
                            >
                                <span className="text-xs font-medium opacity-80">{date.day}</span>
                                <span className="text-2xl font-bold">{date.date}</span>
                                <span className="text-xs opacity-80">{date.month}</span>
                                {date.isToday && (
                                    <span className="text-[10px] font-bold mt-1">TODAY</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Select Time Slot</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {timeSlots.map(slot => (
                            <button
                                key={slot.time}
                                onClick={() => slot.available && updateBookingDetails({ time: slot.time })}
                                disabled={!slot.available}
                                className={`p-4 rounded-xl border-2 font-semibold transition-all ${bookingDetails.time === slot.time
                                        ? 'border-purple-600 bg-purple-600 text-white shadow-md'
                                        : slot.available
                                            ? 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-700'
                                            : 'border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 text-gray-400 dark:text-slate-600 cursor-not-allowed'
                                    }`}
                            >
                                {slot.time}
                                {!slot.available && <span className="block text-xs mt-1">Booked</span>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // Step 3: Address with Location Detection
    const AddressStep = () => (
        <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-xl flex gap-3 text-blue-700 dark:text-blue-400">
                <Navigation size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                    <p className="font-semibold mb-1">Current Location Detected</p>
                    <p className="text-sm">Sector 18, Noida, Uttar Pradesh</p>
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">House / Flat No. *</label>
                <input
                    type="text"
                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all"
                    placeholder="e.g. A-402, Green Valley Apartments"
                    value={bookingDetails.address || ''}
                    onChange={(e) => updateBookingDetails({ address: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Landmark (Optional)</label>
                <input
                    type="text"
                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all"
                    placeholder="Near City Mall, Behind Metro Station"
                />
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Contact Number *</label>
                <input
                    type="tel"
                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all"
                    placeholder="+91 98765 43210"
                />
            </div>
        </div>
    );

    // Step 4: Payment Summary
    const PaymentStep = () => {
        const [couponInput, setCouponInput] = useState('');

        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Summary</h2>

                {/* Coupon */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                        <Tag size={18} className="text-purple-600" />
                        Apply Coupon Code
                    </h3>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter code (e.g., WELCOME50)"
                            className="flex-1 border-2 border-purple-200 dark:border-purple-700 rounded-xl px-4 py-2.5 bg-white dark:bg-slate-800 text-gray-900 dark:text-white uppercase font-mono focus:ring-2 focus:ring-purple-600/20 outline-none"
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                        />
                        <button
                            onClick={() => applyCoupon(couponInput)}
                            className="bg-purple-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-md"
                        >
                            Apply
                        </button>
                    </div>
                    <p className="text-xs text-purple-700 dark:text-purple-400 mt-2">Try: WELCOME50 or URBAN100</p>
                </div>

                {/* Price Breakdown */}
                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl space-y-3">
                    <div className="flex justify-between text-gray-700 dark:text-slate-300">
                        <span>Service Total ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
                        <span className="font-semibold">₹{cartTotal}</span>
                    </div>
                    {selectedAddons.length > 0 && (
                        <div className="flex justify-between text-gray-700 dark:text-slate-300">
                            <span>Add-ons ({selectedAddons.length})</span>
                            <span className="font-semibold">₹{addonsTotal}</span>
                        </div>
                    )}
                    <div className="flex justify-between text-gray-700 dark:text-slate-300">
                        <span>Taxes & Fees</span>
                        <span className="font-semibold">₹49</span>
                    </div>
                    {discount > 0 && (
                        <div className="flex justify-between text-green-600 dark:text-green-400 font-semibold">
                            <span>Discount Applied</span>
                            <span>-₹{discount}</span>
                        </div>
                    )}
                    <div className="border-t-2 border-gray-200 dark:border-slate-700 pt-3 flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                        <span>Total Amount</span>
                        <span className="text-purple-600 dark:text-purple-400">₹{finalTotal + addonsTotal + 49}</span>
                    </div>
                </div>

                {/* Payment Methods */}
                <div>
                    <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Select Payment Method</h3>
                    <div className="space-y-3">
                        {[
                            { method: 'UPI', desc: 'Google Pay, PhonePe, Paytm' },
                            { method: 'Credit Card', desc: 'Visa, Mastercard, Amex' },
                            { method: 'Cash on Delivery', desc: 'Pay after service completion' }
                        ].map(({ method, desc }) => (
                            <label key={method} className="flex items-center gap-4 p-4 border-2 border-gray-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-purple-300 dark:hover:border-purple-700 transition-all bg-white dark:bg-slate-800 has-[:checked]:border-purple-600 has-[:checked]:bg-purple-50 dark:has-[:checked]:bg-purple-900/20">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="w-5 h-5 text-purple-600 focus:ring-purple-600"
                                    checked={bookingDetails.paymentMethod === method}
                                    onChange={() => updateBookingDetails({ paymentMethod: method })}
                                />
                                <div className="flex-1">
                                    <span className="font-semibold text-gray-900 dark:text-white block">{method}</span>
                                    <span className="text-sm text-gray-500 dark:text-slate-400">{desc}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const handleNext = () => {
        if (currentStep === 4) {
            const orderId = Math.floor(100000 + Math.random() * 900000);
            clearCart();
            updateBookingDetails({ orderId });
            navigate(`/service-booking/bookings/${orderId}`);
        } else {
            if (currentStep === 1 && cart.length === 0) return;
            setCurrentStep(prev => prev + 1);
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen pb-32 transition-colors duration-300">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-20 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button onClick={() => currentStep > 1 ? setCurrentStep(c => c - 1) : navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <ChevronLeft size={24} className="text-gray-700 dark:text-slate-300" />
                    </button>
                    <h1 className="font-bold text-xl text-gray-900 dark:text-white">
                        {steps.find(s => s.id === currentStep)?.title}
                    </h1>
                    <div className="w-10"></div>
                </div>

                {/* Step Indicator */}
                <div className="max-w-4xl mx-auto px-4 pb-4">
                    <div className="flex items-center justify-between">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = currentStep === step.id;
                            const isCompleted = currentStep > step.id;
                            return (
                                <React.Fragment key={step.id}>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isCompleted ? 'bg-green-600 text-white' :
                                                isActive ? 'bg-purple-600 text-white shadow-lg scale-110' :
                                                    'bg-gray-200 dark:bg-slate-700 text-gray-400 dark:text-slate-500'
                                            }`}>
                                            <Icon size={20} />
                                        </div>
                                        <span className={`text-xs font-medium ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-slate-400'}`}>
                                            {step.title}
                                        </span>
                                    </div>
                                    {idx < steps.length - 1 && (
                                        <div className={`flex-1 h-1 mx-2 rounded-full transition-all ${currentStep > step.id ? 'bg-green-600' : 'bg-gray-200 dark:bg-slate-700'
                                            }`}></div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                >
                    {currentStep === 1 && <CartStep />}
                    {currentStep === 2 && <ScheduleStep />}
                    {currentStep === 3 && <AddressStep />}
                    {currentStep === 4 && <PaymentStep />}
                </motion.div>
            </div>

            {/* Footer CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 shadow-2xl z-20">
                <div className="max-w-4xl mx-auto flex items-center gap-4">
                    {currentStep === 4 && (
                        <div className="flex-1 text-right">
                            <div className="text-sm text-gray-500 dark:text-slate-400">Total Amount</div>
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">₹{finalTotal + addonsTotal + 49}</div>
                        </div>
                    )}
                    <button
                        onClick={handleNext}
                        disabled={currentStep === 1 && cart.length === 0}
                        className="flex-1 bg-purple-600 text-white font-bold py-4 rounded-xl disabled:bg-gray-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed hover:bg-purple-700 transition-all shadow-lg disabled:shadow-none transform active:scale-95"
                    >
                        {currentStep === 4 ? `Confirm & Pay ₹${finalTotal + addonsTotal + 49}` : 'Continue'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Booking;
