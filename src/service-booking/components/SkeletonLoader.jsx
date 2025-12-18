import React from 'react';

const SkeletonLoader = ({ className = "" }) => {
    return (
        <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}></div>
    );
};

export const ServiceCardSkeleton = () => (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm">
        <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <div className="p-4 space-y-3">
            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
            <div className="flex justify-between items-center pt-2">
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
                <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div>
            </div>
        </div>
    </div>
);

export default SkeletonLoader;
