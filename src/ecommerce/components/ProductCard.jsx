import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ProductCard = ({ product }) => {
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const isInWishlist = wishlist.some(item => item.id === product.id);

    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>
                <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all duration-300 ${isInWishlist
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 dark:bg-black/40 text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-black/60'
                        }`}
                >
                    <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
                </button>
                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                    {product.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm font-semibold mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-medium ml-1 text-gray-600 dark:text-gray-400">
                            {product.rating}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={() => addToCart(product)}
                        className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300"
                        aria-label="Add to Cart"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
