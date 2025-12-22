import React from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const FilterBar = ({
    categories,
    activeCategory,
    setActiveCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange
}) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                <button
                    onClick={() => setActiveCategory('All')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === 'All'
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                >
                    All Categories
                </button>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto self-end md:self-auto">
                {/* Sort Dropdown */}
                <div className="relative group min-w-[160px]">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium outline-none appearance-none hover:border-indigo-500 transition-colors"
                    >
                        <option value="default">Default Sorting</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Filter Toggle (Mobile/Desktop logic placeholder) */}
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:border-indigo-500 transition-colors">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>Filters</span>
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
