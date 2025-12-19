import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingFooter = ({ itemCount = 0, total = 0, onBook }) => {
    if (itemCount === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">{itemCount} items selected</span>
                    <span className="text-xl font-bold text-gray-900">₹{total}</span>
                </div>
                <Link
                    to="/booking"
                    className="px-8 py-3 bg-black text-white font-bold rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors"
                >
                    Book Now
                    <ShoppingBag size={18} />
                </Link>
            </div>
        </div>
    );
};

export default BookingFooter;
