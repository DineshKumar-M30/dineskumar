import React from 'react';
import { ShoppingBag, Github, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6 group">
                            <div className="p-2 bg-indigo-600 rounded-lg group-hover:bg-indigo-700 transition-colors">
                                <ShoppingBag className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                ShopVibe
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Your ultimate destination for premium products. We bring you the best quality with a vibe that fits your lifestyle.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 hover:text-indigo-600">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 hover:text-indigo-600">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 hover:text-indigo-600">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">All Products</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Featured</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Discounts</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                <span>123 Vibe Street, Tech City, 56789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                                <span>support@shopvibe.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © 2025 ShopVibe E-commerce. All rights reserved. Built with ❤️ for the community.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
