import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero section relative overflow-hidden" id="home">
            <div className="interior-container grid items-center" style={{ gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem', minHeight: '70vh' }}>
                <div className="hero-content">
                    <h4 style={{ color: 'var(--accent-tan)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
                        MODERN INTERIOR
                    </h4>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--primary)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Create Your <br /> Interior Design.
                    </h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '480px', fontSize: '1.05rem', lineHeight: '1.7' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <button className="btn btn-primary" style={{ padding: '16px 40px' }}>
                        CONTACT
                    </button>
                </div>

                <div className="hero-image relative">
                    <div className="relative z-10" style={{ perspective: '1000px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                width: '100%',
                                height: '550px',
                                backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '150px 0 150px 0',
                                boxShadow: '30px 30px 0px rgba(196, 164, 132, 0.1)'
                            }}
                        />
                        {/* Decorative border behind image */}
                        <div style={{
                            position: 'absolute',
                            top: '30px',
                            left: '30px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--accent-tan)',
                            borderRadius: '150px 0 150px 0',
                            zIndex: -1
                        }}></div>
                    </div>
                    {/* Floating Accent Circle */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '-20px',
                        width: '100px',
                        height: '100px',
                        background: 'radial-gradient(circle, var(--accent-tan) 10%, transparent 10%)',
                        backgroundSize: '15px 15px',
                        opacity: 0.3,
                        zIndex: 0
                    }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
