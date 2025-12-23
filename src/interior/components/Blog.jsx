import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: '2020 Interior Design Trends',
        date: '28 January, 2020',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
        title: '28 Notable Product at ARC Interior Design',
        date: '15 January, 2020',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    }
];

const Blog = () => {
    return (
        <section className="blog section bg-white" id="blog">
            <div className="interior-container">
                <div className="text-center mb-16">
                    <h4 style={{ color: 'var(--accent-tan)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', fontSize: '0.8rem', marginBottom: '1rem' }}>
                        LATEST NEWS
                    </h4>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>From Our Blog</h2>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="relative mb-6 overflow-hidden" style={{ borderRadius: '60px 0 60px 0' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                    className="group-hover:scale-110 transition-transform duration-500"
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    border: '1px solid var(--accent-tan)',
                                    borderRadius: '60px 0 60px 0',
                                    pointerEvents: 'none',
                                    opacity: 0.3
                                }}></div>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{post.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {post.description}
                            </p>
                            <button className="btn btn-primary">
                                CONTINUE READING....
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
