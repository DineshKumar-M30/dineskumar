import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, User, Video, ShieldCheck } from 'lucide-react';

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const menu = [
        { label: 'Browse Courses', icon: <Home size={20} />, path: '/lms' },
        { label: 'My Learning', icon: <BookOpen size={20} />, path: '/lms/student' },
        { label: 'Instructor Studio', icon: <Video size={20} />, path: '/lms/instructor' },
    ];

    return (
        <div className="fixed left-0 top-0 h-full w-64 bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/50 p-6 flex flex-col z-50">
            <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer" onClick={() => navigate('/lms')}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
                    L
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    LearnX
                </span>
            </div>

            <nav className="flex-1 space-y-2">
                {menu.map((item) => {
                    const active = location.pathname === item.path;
                    return (
                        <div
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`
                flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 group
                ${active
                                    ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }
              `}
                        >
                            <div className={`${active ? 'text-indigo-400' : 'group-hover:text-indigo-400'} transition-colors`}>
                                {item.icon}
                            </div>
                            <span className="font-medium">{item.label}</span>
                            {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />}
                        </div>
                    );
                })}
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-700/50">
                <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-slate-700 transition-all">
                        <User size={20} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-white">Student User</div>
                        <div className="text-xs text-gray-500">Free Plan</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
