import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { mockCourses } from '../data/mockCourses';
import { loadCourses, saveCourses } from '../utils/storage';

export default function CourseListing() {
    const [courses, setCourses] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const persisted = loadCourses();

        // Merge fresh mock data with persisted progress
        const mergedCourses = mockCourses.map(mock => {
            const saved = persisted ? persisted.find(p => p.id === mock.id) : null;
            return {
                ...mock,
                progress: saved ? saved.progress : {}
            };
        });

        setCourses(mergedCourses);
        // We don't necessarily need to save immediately unless we want to sync new structure to LS, 
        // but saving ensures LS is eventually consistent.
        saveCourses(mergedCourses);
    }, []);

    useEffect(() => {
        if (courses.length) saveCourses(courses);
    }, [courses]);

    const categories = ['All', ...new Set(mockCourses.map(c => c.category))];
    const visible = filter === 'All' ? courses : courses.filter(c => c.category === filter);

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">Explore Courses</h1>
                        <p className="text-gray-400">Discover new skills and advance your career.</p>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-800/50 p-1.5 rounded-xl border border-slate-700/50">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === cat ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visible.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
