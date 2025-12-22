import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Heart, ChevronLeft } from 'lucide-react';

const Wishlist = () => {
    const { wishlist } = useShop();

    if (wishlist.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
                <div className="w-24 h-24 bg-red-50 dark:bg-red-900/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-10 h-10 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
                <p className="text-gray-500 mb-8 max-w-sm">Save your favorite items here to keep track of them and buy them later.</p>
                <Link
                    to="/"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg"
                >
                    Explore Products
                </Link>
            </div>
        );
    }

    return (
        <div className="py-8">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    to="/"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </Link>
                <h1 className="text-3xl font-bold">My Wishlist</h1>
                <span className="text-gray-500 font-medium">({wishlist.length} {wishlist.length === 1 ? 'item' : 'items'})</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {wishlist.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
