import React, { useState, useEffect } from 'react';
import './interior.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const InteriorApp = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="interior-app">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <Services />
                <About />
                <Stats />
                <Testimonials />
                <Blog />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
};

export default InteriorApp;
