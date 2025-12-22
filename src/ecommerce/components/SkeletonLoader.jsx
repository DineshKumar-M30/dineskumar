import React from 'react';

const SkeletonLoader = ({ type = 'card' }) => {
    if (type === 'card') {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 animate-pulse">
                <div className="aspect-square bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                    <div className="flex justify-between items-center pt-2">
                        <div className="h-6 bg-indigo-100 dark:bg-indigo-900/30 rounded w-1/4"></div>
                        <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default SkeletonLoader;
