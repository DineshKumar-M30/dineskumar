import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/mockData';
import { Star, Clock, Check, ChevronLeft, ChevronDown, ChevronUp, X, Image as ImageIcon } from 'lucide-react';
import BookingFooter from '../components/BookingFooter';
import { useBooking } from '../context/BookingContext';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === id);
    const { cart, addToCart, removeFromCart, cartTotal } = useBooking();
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [showImageModal, setShowImageModal] = useState(false);

    const isAdded = useMemo(() => cart.some(item => item.id === id), [cart, id]);

    const handleToggleCart = () => {
        if (isAdded) {
            removeFromCart(id);
        } else {
            addToCart(service);
        }
    };

    // Mock FAQs
    const faqs = [
        { q: "What does the service include?", a: "Our service includes a comprehensive cleaning using professional-grade equipment and eco-friendly products. All materials are provided by our professionals." },
        { q: "How long does it take?", a: `Typically ${service?.time}, but may vary based on the specific requirements and condition.` },
        { q: "Do I need to be present?", a: "It's recommended but not mandatory. You can provide access instructions if you won't be available." },
        { q: "What if I'm not satisfied?", a: "We offer a 100% satisfaction guarantee. If you're not happy with the service, we'll make it right or provide a full refund." }
    ];

    // Mock reviews
    const reviews = [
        { name: "Anjali K.", rating: 5, time: "2 days ago", comment: "Very professional and polite. Did a great job! Highly recommended.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Rahul M.", rating: 5, time: "1 week ago", comment: "Excellent service! The professional was on time and very thorough.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Priya S.", rating: 4, time: "2 weeks ago", comment: "Good service overall. Minor delays but quality work.", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }
    ];

    if (!service) return <div className="p-8 text-center">Service not found</div>;

    const discount = service.originalPrice
        ? Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)
        : 0;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen pb-24 transition-colors duration-300">
            {/* Sticky Header Mobile */}
            <div className="sticky top-0 bg-white dark:bg-slate-900 z-30 px-4 py-3 flex items-center gap-4 shadow-sm md:hidden border-b border-gray-200 dark:border-slate-800">
                <Link to={`/service-booking/services/${service.categoryId}`}><ChevronLeft size={24} className="text-gray-700 dark:text-slate-300" /></Link>
                <span className="font-semibold text-lg truncate text-gray-900 dark:text-white">{service.name}</span>
            </div>

            <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 min-h-screen shadow-lg md:my-8 md:rounded-3xl md:overflow-hidden md:min-h-0">

                {/* Gallery / Cover */}
                <div className="relative h-72 md:h-96 bg-gray-200 dark:bg-slate-800 group cursor-pointer" onClick={() => setShowImageModal(true)}>
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* View Photos Button */}
                    <button className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors">
                        <ImageIcon size={16} />
                        View Photos
                    </button>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">{service.name}</h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg">
                                <Star size={16} className="fill-amber-400 text-amber-400" />
                                <span className="font-bold">{service.rating}</span>
                            </div>
                            <span>• {typeof service.reviews === 'number' ? `${(service.reviews / 1000).toFixed(1)}k` : service.reviews} reviews</span>
                            <span>• {service.time}</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    {/* Pricing & CTA */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-slate-700 gap-4">
                        <div>
                            <div className="flex items-baseline gap-3 mb-2">
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">₹{service.price}</h2>
                                {service.originalPrice && (
                                    <>
                                        <span className="text-xl text-gray-400 dark:text-slate-500 line-through">₹{service.originalPrice}</span>
                                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-lg text-sm font-bold">
                                            {discount}% OFF
                                        </span>
                                    </>
                                )}
                            </div>
                            <p className="flex items-center gap-2 text-gray-600 dark:text-slate-400">
                                <Clock size={18} className="text-purple-600" />
                                <span className="font-medium">{service.time}</span>
                            </p>
                        </div>
                        <button
                            onClick={handleToggleCart}
                            className={`px-8 py-3.5 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95 ${isAdded
                                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-2 border-green-200 dark:border-green-800'
                                    : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-xl'
                                }`}
                        >
                            {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
                        </button>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About this service</h3>
                        <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-base mb-6">
                            {service.description}
                        </p>

                        <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">What's included</h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {service.features?.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-slate-300 bg-gray-50 dark:bg-slate-800 p-3 rounded-xl">
                                    <div className="mt-0.5 bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                                        <Check size={14} className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <span className="flex-1">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h3>
                        <div className="space-y-3">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                                        {expandedFaq === idx ? <ChevronUp size={20} className="text-purple-600" /> : <ChevronDown size={20} className="text-gray-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {expandedFaq === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-4 text-gray-600 dark:text-slate-400 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Customer Reviews</h3>
                                <p className="text-gray-600 dark:text-slate-400 text-sm mt-1">{typeof service.reviews === 'number' ? `${(service.reviews / 1000).toFixed(1)}k` : service.reviews} verified reviews</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-900 dark:text-white">{service.rating}</div>
                                <div className="flex items-center gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {reviews.map((review, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <span className="font-semibold text-gray-900 dark:text-white">{review.name}</span>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-400 dark:text-slate-500">{review.time}</span>
                                            </div>
                                            <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">{review.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {showImageModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowImageModal(false)}
                    >
                        <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={service.image}
                            alt={service.name}
                            className="max-w-full max-h-full object-contain rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <BookingFooter itemCount={cart.length} total={cartTotal} />
        </div>
    );
};

export default ServiceDetail;
