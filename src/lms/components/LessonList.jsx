import React from 'react';

export default function LessonList({ lessons, currentLessonId, onSelect, progress = {} }) {
    if (!lessons || lessons.length === 0) return null;

    return (
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {lessons.map((lesson, idx) => {
                const isCompleted = progress[lesson.id];
                const isActive = lesson.id === currentLessonId;

                // Locked if it's not the first lesson AND the previous lesson is not completed
                const isLocked = idx > 0 && !progress[lessons[idx - 1].id];

                return (
                    <div
                        key={lesson.id}
                        className={`
              p-4 rounded-xl flex items-center justify-between transition-all duration-200 border
              ${isActive
                                ? 'bg-blue-600/20 border-blue-500/50 shadow-lg shadow-blue-500/10 scale-[1.02]'
                                : isLocked
                                    ? 'opacity-50 cursor-not-allowed bg-slate-800/20 border-transparent'
                                    : 'hover:bg-white/5 cursor-pointer bg-slate-800/40 border-transparent hover:border-slate-700'
                            }
            `}
                        onClick={() => !isLocked && onSelect(lesson)}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                ${isCompleted ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' : isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-700 text-gray-400'}
              `}>
                                {isCompleted ? '✓' : idx + 1}
                            </div>
                            <div>
                                <div className={`text-base font-medium ${isActive ? 'text-blue-100' : 'text-gray-200'}`}>
                                    {lesson.title}
                                </div>
                                <div className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
                                    <span>{lesson.duration}</span>
                                    {isLocked && <span className="text-red-400 text-[10px] border border-red-500/30 px-1.5 py-px rounded uppercase tracking-wider font-bold">Locked</span>}
                                </div>
                            </div>
                        </div>

                        <div>
                            {isLocked ? (
                                <span className="text-gray-600">🔒</span>
                            ) : isActive ? (
                                <div className="flex gap-1">
                                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></span>
                                </div>
                            ) : (
                                <span className="text-gray-600">▶</span>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
