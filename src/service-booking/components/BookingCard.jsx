import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, MoreVertical } from 'lucide-react';

const BookingCard = ({ booking, onViewDetails, onCancel, onReschedule, compact = false }) => {
    const statusColors = {
        'Booked': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        'In Progress': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        'Completed': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        'Cancelled': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    };

    const canCancel = booking.status === 'Booked';
    const canReschedule = booking.status === 'Booked';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all"
        >
            <div className={`flex ${compact ? 'flex-row' : 'flex-col sm:flex-row'} gap-4 p-4`}>
                {/* Service Image */}
                <div className={`${compact ? 'w-24 h-24' : 'w-full sm:w-32 h-32'} flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800`}>
                    <img
                        src={booking.serviceImage}
                        alt={booking.serviceName}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Booking Details */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">
                                {booking.serviceName}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-slate-400">
                                {booking.category}
                            </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusColors[booking.status]}`}>
                            {booking.status}
                        </span>
                    </div>

                    <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
                            <Calendar size={16} className="flex-shrink-0" />
                            <span>{new Date(booking.date).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            })}</span>
                            <Clock size={16} className="ml-2 flex-shrink-0" />
                            <span>{booking.time}</span>
                        </div>

                        {!compact && (
                            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400">
                                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-1">
                                    {booking.address.line1}, {booking.address.city}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                ₹{booking.finalPrice}
                            </span>
                            {booking.discount > 0 && (
                                <span className="ml-2 text-sm text-gray-500 dark:text-slate-400 line-through">
                                    ₹{booking.price}
                                </span>
                            )}
                        </div>

                        {!compact && (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => onViewDetails(booking)}
                                    className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm"
                                >
                                    View Details
                                </button>

                                {(canCancel || canReschedule) && (
                                    <div className="relative group">
                                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                            <MoreVertical size={20} className="text-gray-600 dark:text-slate-400" />
                                        </button>

                                        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                                            {canReschedule && (
                                                <button
                                                    onClick={() => onReschedule(booking)}
                                                    className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 first:rounded-t-lg"
                                                >
                                                    Reschedule
                                                </button>
                                            )}
                                            {canCancel && (
                                                <button
                                                    onClick={() => onCancel(booking)}
                                                    className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 last:rounded-b-lg"
                                                >
                                                    Cancel Booking
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BookingCard;
