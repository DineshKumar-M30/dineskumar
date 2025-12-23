import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="about section bg-offwhite" id="about">
            <div className="interior-container grid items-center" style={{ gridTemplateColumns: '1fr 1.2fr', gap: '5rem' }}>
                <div className="about-image relative">
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                width: '100%',
                                height: '600px',
                                backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '250px 0 0 250px',
                                boxShadow: '-40px 40px 0px rgba(196, 164, 132, 0.05)'
                            }}
                        />
                        {/* Decorative thin border */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '100%',
                            height: '100%',
                            border: '1px solid var(--accent-tan)',
                            borderRadius: '250px 0 0 250px',
                            zIndex: -1
                        }}></div>
                    </div>
                </div>

                <div className="about-content">
                    <h4 style={{ color: 'var(--accent-tan)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', fontSize: '0.8rem', marginBottom: '1rem' }}>
                        ABOUT US
                    </h4>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.2' }}>
                        Interioris The Will <br /> of An Epoch Mextreo
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
                        If you are going to use a passage of Lorem Ipsum, sure there isn't anything embarrassing hidden the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                    </p>
                    <button className="btn btn-primary">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
