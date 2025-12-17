import React, { useEffect, useState } from 'react';
import { loadCourses } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const persisted = loadCourses();
        if (persisted) setCourses(persisted);
    }, []);

    const enrolled = courses.filter(c => c && c.progress && Object.keys(c.progress).length > 0);

    const activeCourses = enrolled.filter(c => {
        const completed = Object.keys(c.progress).length;
        const total = c.lessons ? c.lessons.length : 0;
        return total === 0 || completed < total;
    });

    const completedCourses = enrolled.filter(c => {
        const completed = Object.keys(c.progress).length;
        const total = c.lessons ? c.lessons.length : 0;
        return total > 0 && completed === total;
    });

    const CourseGrid = ({ list, emptyMsg }) => (
        list.length === 0 ? <div className="text-gray-400 italic">{emptyMsg}</div> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map(c => {
                    const completed = c.progress ? Object.keys(c.progress).length : 0;
                    const total = c.lessons ? c.lessons.length : 0;
                    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

                    return (
                        <div key={c.id} className="glass-card p-5 rounded-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg leading-tight">{c.title}</h3>
                                        <div className="text-sm text-gray-400 mt-1">By {c.instructor}</div>
                                    </div>
                                    {pct === 100 && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">Done</span>}
                                </div>

                                <div className="w-full bg-gray-700/50 h-2 rounded-full mt-4 mb-2 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${pct === 100 ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-gradient-to-r from-cyan-500 to-blue-600'}`}
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500 mb-4">
                                    <span>{pct}% Complete</span>
                                    <span>{completed}/{total} Lessons</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate(`/lms/course/${c.id}`)}
                                className={`w-full py-2 rounded-xl text-sm font-semibold transition-all ${pct === 100
                                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
                                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                                    }`}
                            >
                                {pct === 100 ? 'Review Course' : pct > 0 ? 'Continue Learning' : 'Start Course'}
                            </button>
                        </div>
                    );
                })}
            </div>
    );

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto space-y-12">
                <section>
                    <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">My Learning</span>
                    </h1>
                    {enrolled.length === 0 ? (
                        <div className="glass-card p-8 rounded-2xl text-center">
                            <h3 className="text-xl font-semibold mb-2">No courses yet</h3>
                            <p className="text-gray-400 mb-6">Start your journey today by exploring our catalog.</p>
                            <button onClick={() => navigate('/lms')} className="bg-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-500 transition-colors">Browse Courses</button>
                        </div>
                    ) : (
                        <CourseGrid list={activeCourses} emptyMsg="No active courses. Great job keeping up!" />
                    )}
                </section>

                {completedCourses.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-gray-300">Completed</h2>
                        <CourseGrid list={completedCourses} emptyMsg="" />
                    </section>
                )}
            </div>
        </div>
    );
}
