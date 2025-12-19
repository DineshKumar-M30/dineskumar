import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Search, MapPin, User, ShoppingBag, Sun, Moon } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Navbar = () => {
    const { theme, toggleTheme } = useUser();
    const darkMode = theme === 'dark';
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Location */}
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                                <span className="text-white dark:text-black font-bold text-xl">U</span>
                            </div>
                            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>
                                UrbanClone
                            </span>
                        </Link>

                        <div className={`hidden md:flex items-center gap-2 text-sm cursor-pointer transition-colors px-4 py-2 rounded-full ${isScrolled ? 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300' : 'bg-white/90 backdrop-blur shadow-sm text-gray-700'}`}>
                            <MapPin size={16} className="text-purple-600" />
                            <span className="font-medium">Delhi NCR</span>
                        </div>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-12">
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search size={20} className="text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                            </div>
                            <input
                                type="text"
                                className={`block w-full pl-12 pr-4 py-3 rounded-2xl leading-5 transition-all duration-300 outline-none
                                    ${isScrolled
                                        ? 'bg-gray-100 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 border-2 border-transparent focus:border-purple-600/20'
                                        : 'bg-white shadow-lg shadow-gray-200/20 focus:shadow-xl'
                                    } text-gray-900 dark:text-white placeholder-gray-500`}
                                placeholder="Search for 'AC Service', 'Massage'..."
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100 dark:hover:bg-slate-800' : 'bg-white/90 shadow-sm hover:bg-white'}`}
                        >
                            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-700" />}
                        </button>

                        <Link to="/dashboard" className={`hidden sm:flex items-center gap-2 font-medium transition-colors ${isScrolled ? 'text-gray-700 dark:text-slate-300 hover:text-purple-600' : 'text-gray-800 hover:text-purple-600'}`}>
                            <ShoppingBag size={20} />
                            <span>Dashboard</span>
                        </Link>

                        <button className={`hidden sm:flex items-center gap-2 font-medium transition-colors ${isScrolled ? 'text-gray-700 dark:text-slate-300 hover:text-purple-600' : 'text-gray-800 hover:text-purple-600'}`}>
                            <User size={20} />
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Footer = () => (
    <footer className="bg-slate-900 text-white pt-12 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">UrbanClone</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Premium home services at your doorstep. Experienced professionals, transparent pricing.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">For Customers</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-white transition-colors">UC Reviews</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <p className="text-sm text-slate-400">help@urbanclone.com</p>
                    <div className="flex gap-4 mt-4">
                        {/* Social placeholders */}
                        <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                        <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                        <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} UrbanClone. All rights reserved.
            </div>
        </div>
    </footer>
);

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
