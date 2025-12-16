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
        <div className={`fixed top-0 w-full h-[64px] p-5 z-50 transition-all duration-300 ease-in ${show ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
            <div className="flex justify-between items-center h-full">
                <img
                    onClick={() => navigate('/')}
                    className="fixed left-5 w-24 object-contain cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                />

                <div className="flex items-center gap-4 fixed right-5 text-white">
                    <div className={`flex items-center bg-black/50 border border-white/30 rounded px-2 py-1 transition-all duration-300 ${showSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 hidden'}`}>
                        <Search className="w-5 h-5 text-gray-400" />
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                className="bg-transparent border-none outline-none text-white text-sm ml-2 w-[150px]"
                                placeholder="Titles, people, genres"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                        </form>
                        <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" onClick={() => setShowSearch(false)} />
                    </div>

                    {!showSearch && <Search className="w-6 h-6 cursor-pointer hover:text-gray-300" onClick={() => setShowSearch(true)} />}

                    <span className="cursor-pointer hover:text-gray-300 hidden sm:block" onClick={() => navigate('/watchlist')}>My List</span>
                    <Bell className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                    <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center cursor-pointer">
                        <User className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
