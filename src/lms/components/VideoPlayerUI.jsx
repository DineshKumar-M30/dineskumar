import React from 'react';

export default function VideoPlayerUI({ lesson }) {
    if (!lesson) {
        return (
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white">
                    <div className="text-center p-6">
                        <div className="text-xl font-semibold mb-2">Select a lesson to start</div>
                        <div className="text-sm text-gray-400">Choose from the lesson list on the right</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
            {lesson.videoUrl ? (
                <video
                    key={lesson.id}
                    className="w-full aspect-video bg-black"
                    controls
                    controlsList="nodownload"
                    autoPlay={false}
                >
                    <source src={lesson.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white">
                    <div className="text-center">
                        <div className="text-xl font-semibold">{lesson.title}</div>
                        <div className="text-sm text-gray-400 mt-2">Video not available</div>
                    </div>
                </div>
            )}
            <div className="p-5 bg-slate-900/40 backdrop-blur-sm border-t border-slate-700/50">
                <h3 className="text-xl font-bold text-white">{lesson.title}</h3>
                <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                    Duration: {lesson.duration}
                </p>
            </div>
        </div>
    );
}
