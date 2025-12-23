import React from 'react';

const Navbar = ({ theme, toggleTheme }) => (
    <nav className="navbar sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md" style={{ borderBottom: '1px solid #eee' }}>
        <div className="interior-container flex justify-between items-center" style={{ padding: '20px 0' }}>
            <div className="logo flex items-center gap-2" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                <span style={{ color: 'var(--accent-tan)' }}>B</span> DECBASE
            </div>
            <div className="nav-links flex gap-6" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: '500' }}>
                <a href="#home" className="hover:text-[var(--accent-tan)] transition-colors">HOME</a>
                <a href="#project" className="hover:text-[var(--accent-tan)] transition-colors">PROJECT</a>
                <a href="#services" className="hover:text-[var(--accent-tan)] transition-colors">SERVICES</a>
                <a href="#about" className="hover:text-[var(--accent-tan)] transition-colors">ABOUT</a>
                <a href="#blog" className="hover:text-[var(--accent-tan)] transition-colors">BLOG</a>
                <a href="#shop" className="hover:text-[var(--accent-tan)] transition-colors">SHOP</a>
                <a href="#contact" className="hover:text-[var(--accent-tan)] transition-colors">CONTACT</a>
            </div>
            <div className="flex items-center gap-4">
                {/* <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Toggle Theme">
                    {theme === 'light' ? '🌙' : '☀️'}
                </button> */}
                <button className="btn btn-signup">Sign Up</button>
            </div>
        </div>
    </nav>
);

export default Navbar;
