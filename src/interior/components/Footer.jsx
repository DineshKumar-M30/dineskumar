import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer section bg-white border-t border-gray-100">
            <div className="interior-container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                    <div className="footer-brand">
                        <div className="logo mb-6" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                            <span style={{ color: 'var(--accent-tan)' }}>B</span> DECBASE
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            Your ultimate destination for premium interior design. We bring you the best quality with a vibe that fits your lifestyle.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Shop</h3>
                        <ul className="flex flex-col gap-3" style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
                            <li><a href="#" className="hover:text-[var(--accent-tan)] transition-colors">All Products</a></li>
                            <li><a href="#" className="hover:text-[var(--accent-tan)] transition-colors">Featured</a></li>
                            <li><a href="#" className="hover:text-[var(--accent-tan)] transition-colors">New Arrivals</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Support</h3>
                        <ul className="flex flex-col gap-3" style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
                            <li><a href="#" className="hover:text-[var(--accent-tan)] transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-[var(--accent-tan)] transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-[var(--accent-tan)] transition-colors">Returns & Refunds</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Social</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-50 rounded-lg hover:bg-[var(--accent-tan)] hover:text-white transition-all"><Facebook size={20} /></a>
                            <a href="#" className="p-2 bg-gray-50 rounded-lg hover:bg-[var(--accent-tan)] hover:text-white transition-all"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-gray-50 rounded-lg hover:bg-[var(--accent-tan)] hover:text-white transition-all"><Instagram size={20} /></a>
                            {/* <a href="#" className="p-2 bg-gray-50 rounded-lg hover:bg-[var(--accent-tan)] hover:text-white transition-all"><LinkedIn size={20} /></a> */}
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                    &copy; 2024 DECBASE Interior Design. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
