import React from 'react';
import { mockCourses } from '../data/mockCourses';

export default function InstructorDashboard() {
    const stats = [
        { label: 'Total Students', value: '2,105', change: '+12%' },
        { label: 'Total Revenue', value: '$12.5k', change: '+8%' },
        { label: 'Course Rating', value: '4.8', change: '★' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Instructor Studio</h1>
                        <p className="text-gray-400 mt-1">Manage your courses and track performance</p>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-purple-500/25">
                        + Create New Course
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {stats.map(s => (
                        <div key={s.label} className="glass-card p-6 rounded-2xl">
                            <div className="text-gray-400 text-sm mb-1">{s.label}</div>
                            <div className="text-3xl font-bold text-white flex items-end gap-2">
                                {s.value}
                                <span className="text-sm text-green-400 font-medium bg-green-500/10 px-2 py-0.5 rounded-full mb-1">{s.change}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold text-white mb-4">Your Courses</h2>
                <div className="space-y-4">
                    {mockCourses.map(c => (
                        <div key={c.id} className="glass-card p-5 rounded-xl flex flex-wrap gap-4 items-center justify-between hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs text-gray-500">
                                    Thumbnail
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors">{c.title}</div>
                                    <div className="text-sm text-gray-400 flex items-center gap-4 mt-1">
                                        <span>{c.lessons.length} lessons</span>
                                        <span>•</span>
                                        <span>{c.enrolled} students</span>
                                        <span>•</span>
                                        <span>{c.category}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium">Edit</button>
                                <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium">Analytics</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
