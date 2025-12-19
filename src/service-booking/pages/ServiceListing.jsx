import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services, categories } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import { ServiceCardSkeleton } from '../components/SkeletonLoader';
import { ChevronRight, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import BookingFooter from '../components/BookingFooter';
import { useBooking } from '../context/BookingContext';

const ServiceListing = () => {
    const { category: categoryId } = useParams();
    const { cart, cartTotal } = useBooking();
    const [isLoading, setIsLoading] = React.useState(true);
    const [sortBy, setSortBy] = useState('popular');
    const [priceFilter, setPriceFilter] = useState('all');

    React.useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, [categoryId]);

    const categoryInfo = categories.find(c => c.id === categoryId);

    const filteredAndSortedServices = useMemo(() => {
        let filtered = services.filter(service => service.categoryId === categoryId);

        // Price filter
        if (priceFilter === 'low') {
            filtered = filtered.filter(s => s.price < 1000);
        } else if (priceFilter === 'mid') {
            filtered = filtered.filter(s => s.price >= 1000 && s.price < 3000);
        } else if (priceFilter === 'high') {
            filtered = filtered.filter(s => s.price >= 3000);
        }

        // Sorting
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        return filtered;
    }, [categoryId, sortBy, priceFilter]);

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen pb-24 transition-colors duration-300">
            {/* Breadcrumb / Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-8 px-4 sm:px-6 lg:px-8 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 mb-3">
                        <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 dark:text-white font-medium capitalize">{categoryInfo?.name || categoryId}</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{categoryInfo?.name || 'Services'}</h1>
                    <p className="text-gray-600 dark:text-slate-400">{filteredAndSortedServices.length} professionals near you</p>
                </div>
            </div>

            {/* Filter & Sort Bar */}
            <div className="sticky top-16 z-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2">
                            <ArrowUpDown size={18} className="text-gray-500 dark:text-slate-400" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-200 font-medium focus:outline-none focus:ring-2 focus:ring-purple-600/20 cursor-pointer"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="rating">Highest Rated</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Price Filter */}
                        <div className="flex items-center gap-2">
                            <SlidersHorizontal size={18} className="text-gray-500 dark:text-slate-400" />
                            <div className="flex gap-2">
                                {[
                                    { value: 'all', label: 'All Prices' },
                                    { value: 'low', label: 'Under ₹1000' },
                                    { value: 'mid', label: '₹1000-3000' },
                                    { value: 'high', label: 'Above ₹3000' }
                                ].map(filter => (
                                    <button
                                        key={filter.value}
                                        onClick={() => setPriceFilter(filter.value)}
                                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${priceFilter === filter.value
                                            ? 'bg-purple-600 text-white shadow-md'
                                            : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                                            }`}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Listings */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {isLoading ? (
                        [...Array(8)].map((_, i) => <ServiceCardSkeleton key={i} />)
                    ) : filteredAndSortedServices.length > 0 ? (
                        filteredAndSortedServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} showBadge={index === 0} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <div className="text-gray-400 dark:text-slate-500 mb-4">
                                <svg className="w-24 h-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-xl font-semibold text-gray-700 dark:text-slate-300 mb-2">No services found</p>
                            <p className="text-gray-500 dark:text-slate-400 mb-6">Try adjusting your filters or explore other categories</p>
                            <Link to="/" className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors">
                                Explore Categories
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <BookingFooter itemCount={cart.length} total={cartTotal} />
        </div>
    );
};

export default ServiceListing;
