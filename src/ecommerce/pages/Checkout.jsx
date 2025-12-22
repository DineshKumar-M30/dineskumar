import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ChevronLeft, CreditCard, Truck, ShieldCheck, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Checkout = () => {
    const { cartItems, total, subtotal, clearCart } = useShop();
    const navigate = useNavigate();
    const [isOrdered, setIsOrdered] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        paymentMethod: 'card'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order processing
        const loadingToast = toast.loading('Processing your order...');

        setTimeout(() => {
            toast.dismiss(loadingToast);
            setIsOrdered(true);
            clearCart();
        }, 2000);
    };

    if (isOrdered) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-8 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Order Placed!</h1>
                <p className="text-gray-500 mb-8 max-w-md">
                    Thank you for your purchase. We've received your order and we'll notify you once it has shipped.
                    Your order number is <span className="font-bold text-gray-900 dark:text-gray-100">#SV-827391</span>.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                    Back to Shopping
                </button>
            </div>
        );
    }

    if (cartItems.length === 0) {
        navigate('/');
        return null;
    }

    return (
        <div className="py-8">
            <div className="flex items-center gap-4 mb-10">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <h1 className="text-3xl font-bold">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Checkout Forms */}
                <div className="lg:col-span-7 space-y-10">
                    <form id="checkout-form" onSubmit={handleSubmit}>
                        {/* Contact Information */}
                        <section className="mb-10">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 text-sm flex items-center justify-center font-bold">1</span>
                                Contact Information
                            </h2>
                            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="space-y-4">
                                    <label className="block">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</span>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none p-3 transition-all"
                                        />
                                    </label>
                                </div>
                            </div>
                        </section>

                        {/* Shipping Details */}
                        <section className="mb-10">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 text-sm flex items-center justify-center font-bold">2</span>
                                Shipping Address
                            </h2>
                            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <label>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</span>
                                        <input
                                            required
                                            name="firstName"
                                            placeholder="Jane"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none p-3 transition-all"
                                        />
                                    </label>
                                    <label>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</span>
                                        <input
                                            required
                                            name="lastName"
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none p-3 transition-all"
                                        />
                                    </label>
                                </div>
                                <div className="space-y-4">
                                    <label>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Address</span>
                                        <input
                                            required
                                            name="address"
                                            placeholder="123 Street Ave"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none p-3 transition-all"
                                        />
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <label>
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">City</span>
                                            <input
                                                required
                                                name="city"
                                                placeholder="Tech City"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none p-3 transition-all"
                                            />
                                        </label>
                                        <label>
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Zip Code</span>
                                            <input
                                                required
                                                name="zipCode"
                                                placeholder="123456"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none p-3 transition-all"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Payment Method */}
                        <section className="mb-10">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 text-sm flex items-center justify-center font-bold">3</span>
                                Payment Method
                            </h2>
                            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                                        className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${formData.paymentMethod === 'card'
                                            ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20'
                                            : 'border-gray-100 dark:border-gray-700 hover:border-indigo-200'
                                            }`}
                                    >
                                        <CreditCard className={`w-6 h-6 ${formData.paymentMethod === 'card' ? 'text-indigo-600' : 'text-gray-400'}`} />
                                        <div className="text-left">
                                            <div className="font-bold text-sm">Credit / Debit Card</div>
                                            <div className="text-xs text-gray-500">Secure transaction</div>
                                        </div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'paypal' }))}
                                        className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${formData.paymentMethod === 'paypal'
                                            ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20'
                                            : 'border-gray-100 dark:border-gray-700 hover:border-indigo-200'
                                            }`}
                                    >
                                        <ShoppingBag className={`w-6 h-6 ${formData.paymentMethod === 'paypal' ? 'text-indigo-600' : 'text-gray-400'}`} />
                                        <div className="text-left">
                                            <div className="font-bold text-sm">PayPal</div>
                                            <div className="text-xs text-gray-500">Pay using PayPal balance</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>

                {/* Order Summary Sidebar */}
                <div className="lg:col-span-5">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        <div className="max-h-60 overflow-y-auto mb-8 pr-2 custom-scrollbar">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-lg bg-gray-50 dark:bg-gray-900 shrink-0 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-bold truncate pr-4">{item.name}</div>
                                        <div className="text-xs text-gray-500 mt-1">Qty: {item.quantity} · ${item.price.toFixed(2)}</div>
                                    </div>
                                    <div className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 mb-8 text-sm">
                            <div className="flex justify-between text-gray-500">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>Shipping</span>
                                <span className="text-green-500 font-medium">Free</span>
                            </div>
                            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span className="text-indigo-600 dark:text-indigo-400">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            form="checkout-form"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            <ShieldCheck className="w-5 h-5" />
                            Pay Now & Place Order
                        </button>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                                <Truck className="w-4 h-4 text-indigo-600 mb-2" />
                                <span className="text-[10px] font-bold">Fast Delivery</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                                <ShieldCheck className="w-4 h-4 text-indigo-600 mb-2" />
                                <span className="text-[10px] font-bold">Secure Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
