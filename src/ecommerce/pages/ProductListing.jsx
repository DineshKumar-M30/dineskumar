import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import SkeletonLoader from '../components/SkeletonLoader';
import { Sparkles, SearchX } from 'lucide-react';

const ProductListing = () => {
    const { products } = useShop();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q') || '';

    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial load
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const categories = useMemo(() => {
        return Array.from(new Set(products.map(p => p.category)));
    }, [products]);

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Search Filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
        }

        // Category Filter
        if (activeCategory !== 'All') {
            result = result.filter(p => p.category === activeCategory);
        }

        // Sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return result;
    }, [products, searchQuery, activeCategory, sortBy]);

    return (
        <div className="py-4">
            {/* Hero Section Placeholder */}
            {!searchQuery && (
                <section className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-8 md:p-16">
                    <div className="relative z-10 max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>New Season Collections</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Elevate Your Vibe <br /> With Premium Quality
                        </h1>
                        <p className="text-white/80 text-lg mb-8 max-w-md">
                            Discover a curated selection of products designed to enhance your everyday lifestyle. Quality you can trust, style you'll love.
                        </p>
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                            Shop Now
                        </button>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"></div>
                </section>
            )}

            {/* Results Title for Search */}
            {searchQuery && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        Results for <span className="text-indigo-600">"{searchQuery}"</span>
                        <span className="text-sm font-normal text-gray-500 ml-2">
                            ({filteredProducts.length} items)
                        </span>
                    </h2>
                </div>
            )}

            {/* Filters Section */}
            <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {isLoading
                    ? [...Array(8)].map((_, i) => <SkeletonLoader key={i} />)
                    : filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>

            {!isLoading && filteredProducts.length === 0 && (
                <div className="text-center py-20 flex flex-col items-center gap-4">
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                        <SearchX className="w-12 h-12 text-gray-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">No results found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            We couldn't find any products matching your selection. Try adjusting your filters or search terms.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductListing;
