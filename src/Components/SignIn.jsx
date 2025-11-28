import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation rules
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return 'Email is required';
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        return '';
    };

    const validatePassword = (password) => {
        if (!password) return 'Password is required';
        if (password.length < 6) return 'Password must be at least 6 characters';
        return '';
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }));

        // Validate on change if field has been touched
        if (touched[name]) {
            validateField(name, newValue);
        }
    };

    // Handle blur event
    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
        validateField(name, value);
    };

    // Validate individual field
    const validateField = (name, value) => {
        let error = '';

        if (name === 'email') {
            error = validateEmail(value);
        } else if (name === 'password') {
            error = validatePassword(value);
        }

        setErrors(prev => ({
            ...prev,
            [name]: error
        }));

        return error;
    };

    // Validate all fields
    const validateForm = () => {
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        setErrors({
            email: emailError,
            password: passwordError
        });

        setTouched({
            email: true,
            password: true
        });

        return !emailError && !passwordError;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            alert('Login successful! (This is a demo)');
            // Here you would typically handle the actual login logic
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle Google Sign In
    const handleGoogleSignIn = () => {
        console.log('Google Sign In clicked');
        alert('Google Sign In would be implemented here');
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Illustration */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-100 via-peach-100 to-pink-100 relative overflow-hidden items-center justify-center p-12"
            >
                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full opacity-70 blur-2xl"></div>
                <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-50"></div>
                <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full opacity-40 blur-xl"></div>

                {/* Decorative dots */}
                <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="absolute top-40 right-1/3 w-2 h-2 bg-rose-400 rounded-full"></div>
                <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-pink-400 rounded-full"></div>

                {/* Main illustration container */}
                <div className="relative z-10 text-center max-w-md">
                    {/* Skeleton illustration */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative mb-8"
                    >
                        {/* Large circle background */}
                        <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-200/50 to-pink-200/50 rounded-full flex items-center justify-center relative">
                            {/* Skeleton character */}
                            <div className="relative">
                                {/* Skull */}
                                <div className="w-24 h-28 bg-white rounded-full relative border-4 border-gray-800 mb-2">
                                    {/* Eyes */}
                                    <div className="absolute top-8 left-4 w-8 h-10 bg-gray-800 rounded-full transform -rotate-12"></div>
                                    <div className="absolute top-8 right-4 w-8 h-10 bg-gray-800 rounded-full transform rotate-12"></div>
                                    {/* Nose */}
                                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-4 border-4 border-gray-800 border-b-0 rounded-t-full"></div>
                                    {/* Teeth */}
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="w-2 h-3 bg-gray-800 rounded-sm"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Ribcage */}
                                <div className="w-32 h-40 bg-gradient-to-b from-white to-gray-100 rounded-3xl relative border-4 border-gray-800">
                                    {/* Ribs */}
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="flex justify-center gap-2 mt-2">
                                            <div className="w-12 h-2 bg-orange-300 rounded-full border-2 border-orange-400"></div>
                                            <div className="w-12 h-2 bg-orange-300 rounded-full border-2 border-orange-400"></div>
                                        </div>
                                    ))}
                                    {/* Small skull icon */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-gray-800 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Decorative plants */}
                                <div className="absolute -bottom-8 -left-16 flex gap-2">
                                    <div className="w-16 h-20 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-full transform rotate-12"></div>
                                    <div className="w-12 h-16 bg-gradient-to-t from-rose-500 to-rose-300 rounded-t-full"></div>
                                </div>
                                <div className="absolute -bottom-8 -right-16 flex gap-2">
                                    <div className="w-12 h-16 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-full"></div>
                                    <div className="w-16 h-20 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t-full transform -rotate-12"></div>
                                </div>
                            </div>

                            {/* Chat bubbles */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.3 }}
                                className="absolute top-20 left-8 bg-purple-600 text-white px-4 py-2 rounded-2xl rounded-bl-none"
                            >
                                <div className="flex gap-1">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="absolute top-20 right-8 bg-purple-600 text-white px-4 py-2 rounded-2xl rounded-br-none"
                            >
                                <div className="flex gap-1">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <h1 className="text-3xl font-bold text-purple-900 mb-3">
                            Turn your ideas into reality.
                        </h1>
                        <p className="text-purple-700 text-lg">
                            Start for free and get attractive offers from the community
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Side - Sign In Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50"
            >
                <div className="w-full max-w-md">
                    {/* Logo/Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Login to your Account
                        </h2>
                        <p className="text-gray-500">
                            See what is going on with your business
                        </p>
                    </motion.div>

                    {/* Google Sign In Button */}
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl py-3 px-4 mb-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                    >
                        <FcGoogle className="text-2xl" />
                        <span className="font-medium text-gray-700">Continue with Google</span>
                    </motion.button>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-gray-400 text-sm">or Sign in with Email</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </motion.div>

                    {/* Sign In Form */}
                    <motion.form
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <MdEmail className="text-xl" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="mail@abc.com"
                                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${errors.email && touched.email
                                            ? 'border-red-400 bg-red-50 focus:border-red-500'
                                            : 'border-gray-200 bg-gray-50 focus:border-purple-500 focus:bg-white'
                                        }`}
                                />
                            </div>
                            {errors.email && touched.email && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                                >
                                    <span className="text-xs">⚠️</span>
                                    {errors.email}
                                </motion.p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <MdLock className="text-xl" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="••••••••"
                                    className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${errors.password && touched.password
                                            ? 'border-red-400 bg-red-50 focus:border-red-500'
                                            : 'border-gray-200 bg-gray-50 focus:border-purple-500 focus:bg-white'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <MdVisibilityOff className="text-xl" />
                                    ) : (
                                        <MdVisibility className="text-xl" />
                                    )}
                                </button>
                            </div>
                            {errors.password && touched.password && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                                >
                                    <span className="text-xs">⚠️</span>
                                    {errors.password}
                                </motion.p>
                            )}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="w-4 h-4 rounded border-2 border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                                    Remember Me
                                </span>
                            </label>
                            <a
                                href="#"
                                className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing In...
                                </span>
                            ) : (
                                'Login'
                            )}
                        </motion.button>
                    </motion.form>

                    {/* Sign Up Link */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-center mt-6 text-gray-600"
                    >
                        Not Registered Yet?{' '}
                        <a
                            href="#"
                            className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                        >
                            Create an account
                        </a>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default SignIn;
