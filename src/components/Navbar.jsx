import React, { useState, useEffect } from 'react';
import { Search, Bell, User, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [show, handleShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/search?q=${searchInput}`);
        }
    };

    return (
        <div className={`fixed top-0 w-full h-[64px] px-6 z-50 transition-all duration-300 ease-in ${show ? "glass" : "bg-transparent"}`}>
            <div className="flex justify-between items-center h-full">
                <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-blue-500/30">L</div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hidden sm:block">LearnX</span>
                </div>

                <div className="flex items-center gap-4 fixed right-5 text-white">
                    <form onSubmit={handleSearchSubmit} className={`flex items-center glass rounded-full px-3 py-1.5 transition-all duration-300 ${showSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 hidden'}`}>
                        <button type="submit" className="p-0 m-0">
                            <Search className="w-5 h-5 text-gray-400" />
                        </button>
                        <input
                            className="bg-transparent border-none outline-none text-white text-sm ml-2 w-[150px]"
                            placeholder="Titles, people, genres"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" onClick={() => setShowSearch(false)} />
                    </form>

                    {!showSearch && <Search className="w-6 h-6 cursor-pointer hover:text-gray-300" onClick={() => setShowSearch(true)} />}

                    <span className="cursor-pointer hover:text-gray-300 hidden sm:block" onClick={() => navigate('/lms/student')}>My Dashboard</span>
                    <span className="cursor-pointer hover:text-gray-300 hidden sm:block" onClick={() => navigate('/lms/instructor')}>Instructor</span>
                    <Bell className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                    <div onClick={() => navigate('/lms/student')} className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center cursor-pointer shadow-lg hover:ring-2 hover:ring-indigo-400 transition-all">
                        <User className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
