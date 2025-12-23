import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter section bg-offwhite">
            <div className="interior-container text-center">
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '4px' }}>
                    DON'T FORGET TO SIGN UP
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', mx: 'auto', marginInline: 'auto' }}>
                    Find out early about all upcoming promotions and new product releases with our newsletter.
                </p>
                <div className="flex justify-center flex-wrap gap-0 max-w-xl mx-auto border-b-2 border-[var(--primary)] pb-2">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        style={{
                            flex: 1,
                            border: 'none',
                            background: 'transparent',
                            padding: '10px',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <button style={{
                        background: 'transparent',
                        border: 'none',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        letterSpacing: '2px',
                        cursor: 'pointer'
                    }}>
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
