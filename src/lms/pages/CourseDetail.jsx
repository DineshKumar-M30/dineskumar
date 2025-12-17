import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadCourses, saveCourses } from '../utils/storage';
import { mockCourses } from '../data/mockCourses';
import VideoPlayerUI from '../components/VideoPlayerUI';
import LessonList from '../components/LessonList';
import CertificateGenerator from '../components/CertificateGenerator';
import Quiz from '../components/Quiz'; // Updated import

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [progressMap, setProgressMap] = useState({});
    const [view, setView] = useState('description');
    const [showCertificate, setShowCertificate] = useState(false);

    useEffect(() => {
        // Always use fresh mock data to get video URLs
        const mockCourse = mockCourses.find(x => x.id === id);
        if (!mockCourse) {
            setCourse(null);
            return;
        }

        // Load persisted progress
        const persisted = loadCourses();
        let progress = {};
        if (persisted) {
            const persistedCourse = persisted.find(x => x.id === id);
            if (persistedCourse && persistedCourse.progress) {
                progress = persistedCourse.progress;
            }
        }

        // Merge fresh course data with persisted progress
        const c = { ...mockCourse, progress };
        setCourse(c);

        if (c && c.lessons && c.lessons.length) {
            // Find the last completed lesson or start with the first one
            let startLesson = c.lessons[0];
            if (progress && Object.keys(progress).length > 0) {
                // Find the first incomplete lesson
                const incompleteLesson = c.lessons.find(lesson => !progress[lesson.id]);
                if (incompleteLesson) {
                    startLesson = incompleteLesson;
                } else {
                    // All lessons completed, show the last one
                    startLesson = c.lessons[c.lessons.length - 1];
                }
            }
            setCurrentLesson(startLesson);
            setProgressMap(progress);
        }
    }, [id]);

    const markComplete = (lesson) => {
        const newMap = { ...(progressMap || {}), [lesson.id]: true };
        const updated = { ...course, progress: newMap };

        setCourse(updated);
        setProgressMap(newMap);

        // Load all courses and update
        const persisted = loadCourses();
        let allCourses = [];

        if (persisted) {
            allCourses = persisted.map(c => {
                if (c.id === course.id) {
                    return updated;
                }
                return c;
            });
        } else {
            // Initialize with all mock courses
            allCourses = mockCourses.map(c => {
                if (c.id === course.id) {
                    return updated;
                }
                return { ...c, progress: {} };
            });
        }

        saveCourses(allCourses);
    };

    const handleSelect = (lesson) => {
        setCurrentLesson(lesson);
        markComplete(lesson);
    };

    if (!course) return (
        <div className="min-h-screen flex items-center justify-center text-white">Course not found</div>
    );

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-blue-400 mb-1 cursor-pointer hover:underline" onClick={() => navigate('/lms')}>
                            &larr; Back to Courses
                        </div>
                        <h1 className="text-3xl font-bold">{course.title}</h1>
                    </div>
                    <div className="flex gap-3">
                        {progressMap && Object.keys(progressMap).length === course.lessons.length && (
                            <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-lg border border-green-500/20 flex items-center gap-2">
                                <span>✓ Course Completed</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <VideoPlayerUI lesson={currentLesson} />

                        <div className="flex gap-4 border-b border-gray-700/50 mb-6">
                            <button
                                onClick={() => setView('description')}
                                className={`pb-2 px-1 font-medium text-sm transition-colors ${view === 'description' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => setView('quiz')}
                                className={`pb-2 px-1 font-medium text-sm transition-colors ${view === 'quiz' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
                            >
                                Quiz
                            </button>
                        </div>

                        {view === 'description' && (
                            <div className="glass-card p-6 rounded-2xl animate-fade-in">
                                <h2 className="text-xl font-bold mb-2">Description</h2>
                                <p className="text-gray-300 leading-relaxed">{course.description}</p>
                                <div className="mt-4 pt-4 border-t border-gray-700/50 text-sm text-gray-400">
                                    Instructor: <span className="text-white font-medium">{course.instructor}</span>
                                </div>
                            </div>
                        )}

                        {view === 'quiz' && (
                            <div className="animate-fade-in">
                                <Quiz
                                    onComplete={() => alert('Quiz Completed! Progress Saved.')}
                                    onViewCertificate={() => {
                                        setShowCertificate(true);
                                        setTimeout(() => {
                                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                        }, 100);
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-4 flex justify-between items-center">
                                Course Content
                                <span className="text-sm font-normal text-gray-400">{Object.keys(progressMap).length}/{course.lessons.length} Completed</span>
                            </h3>
                            <div className="w-full bg-slate-700/50 h-1.5 rounded-full mb-6">
                                <div
                                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                                    style={{ width: `${(Object.keys(progressMap).length / course.lessons.length) * 100}%` }}
                                />
                            </div>
                            <LessonList
                                lessons={course.lessons}
                                currentLessonId={currentLesson?.id}
                                onSelect={handleSelect}
                                progress={progressMap}
                            />
                        </div>
                    </div>
                </div>

                {/* Certificate Section - Bottom of Page */}
                {/* Only show if progress is complete AND user clicked 'View Certificate' */}
                {progressMap && Object.keys(progressMap).length === course.lessons.length && showCertificate && (
                    <div className="mt-12 animate-slide-up">
                        <CertificateGenerator course={course} />
                    </div>
                )}
            </div>
        </div>
    );
}
