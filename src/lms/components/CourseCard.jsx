import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseCard({ course }) {
    const navigate = useNavigate();
    // Safe access to lessons array
    const total = course.lessons ? course.lessons.length : 0;
    // Progress is stored as keys in the progress map
    const completed = course.progress ? Object.keys(course.progress).length : 0;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
        <div className="glass-card rounded-2xl p-4 hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between h-full group">
            <div className="mb-4 relative overflow-hidden rounded-xl h-48">
                <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                    <span className="bg-indigo-600/90 text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm">{course.category}</span>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">{course.title}</h3>
                    {pct === 100 && <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">Done</span>}
                </div>
                <p className="text-sm text-gray-400 mb-4">Instructor: {course.instructor}</p>

                <div className="w-full bg-gray-700/50 h-2 rounded-full mb-2 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ${pct === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-cyan-500 to-blue-600'}`}
                        style={{ width: `${pct}%` }}
                    />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <span>{pct}% completed</span>
                    <span>{completed}/{total} lessons</span>
                </div>
            </div>

            <button
                onClick={() => navigate(`/lms/course/${course.id}`)}
                className={`w-full py-2.5 rounded-xl font-semibold transition-all shadow-lg ${pct === 100
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/25'
                    }`}
            >
                {pct === 100 ? 'Review Course' : pct > 0 ? 'Continue' : 'Start Course'}
            </button>
        </div>
    );
}
