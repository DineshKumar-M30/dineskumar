import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ShoppingCart, Heart, Star, ChevronLeft, Minus, Plus, Share2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, addToCart, toggleWishlist, wishlist } = useShop();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(foundProduct.image);
        }
    }, [id, products]);

    if (!product) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
    );

    const isInWishlist = wishlist.some(item => item.id === product.id);

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <Link to="/" className="hover:text-indigo-600 transition-colors">Shop</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="font-medium text-gray-900 dark:text-gray-100">{product.category}</span>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="truncate">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images?.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(img)}
                                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-indigo-600' : 'border-transparent hover:border-gray-300'
                                    }`}
                            >
                                <img src={img} alt={`${product.name} thumbnail ${idx}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col">
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full uppercase tracking-wider">
                                {product.category}
                            </span>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => toggleWishlist(product)}
                                    className={`p-2 rounded-full transition-colors ${isInWishlist ? 'text-red-500' : 'text-gray-400'
                                        }`}
                                >
                                    <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                                </button>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200 dark:text-gray-700'}`} />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-gray-500">{product.rating} Rating</span>
                            <span className="text-sm text-indigo-600 font-semibold cursor-pointer hover:underline border-l border-gray-200 dark:border-gray-700 pl-4">Write a review</span>
                        </div>
                        <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                            ${product.price.toFixed(2)}
                        </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 border-t border-gray-100 dark:border-gray-700 pt-8">
                        {product.description}
                    </p>

                    <div className="space-y-6 mt-auto">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl px-2 py-1">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center font-bold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>

                        {/* Features Info */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex flex-col items-center text-center">
                                <Truck className="w-6 h-6 text-indigo-600 mb-2" />
                                <span className="text-xs font-semibold">Free Delivery</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <RefreshCw className="w-6 h-6 text-indigo-600 mb-2" />
                                <span className="text-xs font-semibold">30 Days Return</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 mb-2" />
                                <span className="text-xs font-semibold">2 Year Warranty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
