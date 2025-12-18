import React from 'react';
import { Star, Clock, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const ServiceCard = ({ service, showBadge = false }) => {
    const { addToCart, cart } = useBooking();
    const isInCart = cart.some(item => item.id === service.id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(service);
    };

    const discount = service.originalPrice
        ? Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)
        : 0;

    return (
        <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
            {/* Image Section */}
            <Link to={`/service-booking/service/${service.id}`} className="relative h-52 overflow-hidden block">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {showBadge && (
                        <div className="bg-purple-600 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <TrendingUp size={12} />
                            Bestseller
                        </div>
                    )}
                    {discount > 0 && (
                        <div className="bg-green-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
                            {discount}% OFF
                        </div>
                    )}
                </div>

                <div className="absolute top-3 right-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                    <Clock size={12} className="text-purple-600" />
                    <span className="text-gray-700 dark:text-slate-200">{service.time}</span>
                </div>
            </Link>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-snug line-clamp-2 flex-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <Link to={`/service-booking/service/${service.id}`}>{service.name}</Link>
                    </h3>
                </div>

                <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span className="text-sm font-bold text-amber-700 dark:text-amber-400">{service.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-slate-400">
                        {typeof service.reviews === 'number' ? `${(service.reviews / 1000).toFixed(1)}k` : service.reviews} reviews
                    </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2 mb-4 flex-1">
                    {service.description}
                </p>

                {service.features && service.features.length > 0 && (
                    <ul className="mb-4 space-y-1.5">
                        {service.features.slice(0, 2).map((feat, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-slate-400 flex items-center gap-2">
                                <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                                {feat}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="border-t border-gray-100 dark:border-slate-700 pt-4 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{service.price}</span>
                            {service.originalPrice && (
                                <span className="text-sm text-gray-400 dark:text-slate-500 line-through">₹{service.originalPrice}</span>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        disabled={isInCart}
                        className={`px-6 py-2.5 font-semibold rounded-xl shadow-md transition-all transform active:scale-95 ${isInCart
                                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 cursor-not-allowed'
                                : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg'
                            }`}
                    >
                        {isInCart ? 'Added' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
