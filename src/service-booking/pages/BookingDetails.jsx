import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Calendar, Clock, MapPin, User, Phone, CreditCard,
    Download, CheckCircle, Package, Star
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import toast from 'react-hot-toast';

const BookingDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { bookings } = useUser();

    const booking = bookings.find(b => b.id === id);

    const handleDownloadInvoice = () => {
        toast.promise(
            new Promise(resolve => setTimeout(resolve, 1500)),
            {
                loading: 'Preparing invoice...',
                success: 'Invoice downloaded successfully!',
                error: 'Could not download invoice.',
            },
            {
                success: {
                    icon: '📄',
                },
            }
        );
    };

    if (!booking) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Booking not found
                </h2>
                <Link
                    to="/dashboard/bookings"
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                    Go back to bookings
                </Link>
            </div>
        );
    }

    const statusSteps = [
        { label: 'Booking Confirmed', completed: true },
        { label: 'Professional Assigned', completed: booking.status !== 'Cancelled' },
        { label: 'Service In Progress', completed: booking.status === 'In Progress' || booking.status === 'Completed' },
        { label: 'Service Completed', completed: booking.status === 'Completed' }
    ];

    if (booking.status === 'Cancelled') {
        statusSteps.splice(2, 2, { label: 'Booking Cancelled', completed: true });
    }

    return (
        <div className="space-y-6">
            {/* Back Button */}
            <button
                onClick={() => navigate('/dashboard/bookings')}
                className="flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
                <ArrowLeft size={20} />
                <span>Back to Bookings</span>
            </button>

            {/* Header */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row gap-6">
                    <img
                        src={booking.serviceImage}
                        alt={booking.serviceName}
                        className="w-full sm:w-48 h-48 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {booking.serviceName}
                                </h1>
                                <p className="text-gray-600 dark:text-slate-400">
                                    Booking ID: <span className="font-mono font-semibold">#{booking.id}</span>
                                </p>
                            </div>
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${booking.status === 'Booked' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                booking.status === 'In Progress' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                    booking.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                }`}>
                                {booking.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                    <Calendar size={20} className="text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-slate-400">Date</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {new Date(booking.date).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                    <Clock size={20} className="text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-slate-400">Time</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">{booking.time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Status Tracker */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Booking Status
                        </h2>
                        <div className="relative">
                            {/* Progress Line */}
                            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-slate-700"></div>
                            <div
                                className="absolute left-4 top-4 w-0.5 bg-gradient-to-b from-purple-600 to-green-600 transition-all duration-500"
                                style={{
                                    height: `${(statusSteps.filter(s => s.completed).length / statusSteps.length) * 100}%`
                                }}
                            ></div>

                            {/* Steps */}
                            <div className="space-y-6 relative">
                                {statusSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 relative"
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${step.completed
                                            ? 'bg-green-500'
                                            : 'bg-gray-200 dark:bg-slate-700'
                                            }`}>
                                            {step.completed && (
                                                <CheckCircle size={16} className="text-white" />
                                            )}
                                        </div>
                                        <p className={`font-medium ${step.completed
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-400 dark:text-slate-500'
                                            }`}>
                                            {step.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Service Details
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Package size={20} className="text-gray-400 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-slate-400">Category</p>
                                    <p className="font-medium text-gray-900 dark:text-white">{booking.category}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={20} className="text-gray-400 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-slate-400">Duration</p>
                                    <p className="font-medium text-gray-900 dark:text-white">{booking.estimatedDuration}</p>
                                </div>
                            </div>
                            {booking.addOns && booking.addOns.length > 0 && (
                                <div className="flex items-start gap-3">
                                    <Package size={20} className="text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-slate-400">Add-ons</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {booking.addOns.join(', ')}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Address */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Service Address
                        </h2>
                        <div className="flex items-start gap-3">
                            <MapPin size={20} className="text-purple-600 dark:text-purple-400 mt-1" />
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white mb-1">
                                    {booking.address.type}
                                </p>
                                <p className="text-gray-600 dark:text-slate-400">
                                    {booking.address.line1}<br />
                                    {booking.address.line2}, {booking.address.city}<br />
                                    {booking.address.state} - {booking.address.pincode}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Professional Details */}
                    {booking.professional && (
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Professional
                            </h2>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                    {booking.professional.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {booking.professional.name}
                                    </p>
                                    <div className="flex items-center gap-1 text-sm">
                                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                        <span className="font-medium">{booking.professional.rating}</span>
                                        <span className="text-gray-500 dark:text-slate-400">
                                            ({booking.professional.reviews.toLocaleString()} reviews)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
                                <Phone size={16} />
                                <span>{booking.professional.phone}</span>
                            </div>
                        </div>
                    )}

                    {/* Payment Summary */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Payment Summary
                        </h2>
                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between text-gray-600 dark:text-slate-400">
                                <span>Service Price</span>
                                <span>₹{booking.price}</span>
                            </div>
                            {booking.discount > 0 && (
                                <div className="flex justify-between text-green-600 dark:text-green-400">
                                    <span>Discount</span>
                                    <span>-₹{booking.discount}</span>
                                </div>
                            )}
                            <div className="border-t border-gray-200 dark:border-slate-700 pt-3 flex justify-between font-bold text-lg text-gray-900 dark:text-white">
                                <span>Total</span>
                                <span>₹{booking.finalPrice}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <CreditCard size={16} className="text-gray-400" />
                            <span className="text-gray-600 dark:text-slate-400">
                                Payment Method: <span className="font-medium text-gray-900 dark:text-white">{booking.paymentMethod}</span>
                            </span>
                        </div>
                        <div className="mt-2 text-sm">
                            <span className={`font-medium ${booking.paymentStatus === 'Paid' ? 'text-green-600 dark:text-green-400' :
                                booking.paymentStatus === 'Refunded' ? 'text-blue-600 dark:text-blue-400' :
                                    'text-orange-600 dark:text-orange-400'
                                }`}>
                                Status: {booking.paymentStatus}
                            </span>
                        </div>
                    </div>

                    {/* Download Invoice */}
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors">
                        <Download size={20} />
                        Download Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;
