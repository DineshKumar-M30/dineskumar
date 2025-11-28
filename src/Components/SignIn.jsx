import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

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
        if (name === 'email') error = validateEmail(value);
        else if (name === 'password') error = validatePassword(value);

        setErrors(prev => ({ ...prev, [name]: error }));
        return error;
    };

    // Validate all fields
    const validateForm = () => {
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        setErrors({ email: emailError, password: passwordError });
        setTouched({ email: true, password: true });

        return !emailError && !passwordError;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            alert('Login successful! (This is a demo)');
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-white font-sans">
            {/* Left Side - Illustration */}
            <div className="hidden lg:flex lg:w-5/12 bg-[#FFE8D6] relative overflow-hidden flex-col items-center justify-center p-12">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#A04050] rounded-full mix-blend-multiply filter blur-xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#A04050] rounded-full mix-blend-multiply filter blur-xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>

                {/* Main Planet/Circle */}
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#A04050] to-[#7D2E40] opacity-80">
                    <div className="absolute top-1/2 left-1/2 w-full h-1 border border-white/20 transform -translate-x-1/2 -rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 w-full h-1 border border-white/20 transform -translate-x-1/2 -rotate-12 mt-4"></div>
                </div>

                {/* Floating dots */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#A04050] rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-[#A04050] rounded-full"></div>
                <div className="absolute top-1/2 right-10 w-1 h-1 bg-[#A04050] rounded-full"></div>

                <div className="relative z-10 w-full max-w-lg">
                    <img
                        src="/illustration.png"
                        alt="Sign In Illustration"
                        className="w-full h-auto object-contain drop-shadow-xl"
                    />
                </div>

                {/* Bottom Text */}
                <div className="relative z-10 mt-12 text-center">
                    <h1 className="text-3xl font-bold text-[#7D2E58] mb-2">Turn your ideas into reality.</h1>
                    <p className="text-[#A04050] text-lg">Start for free and get attractive offers from the community</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-7/12 flex items-center justify-center p-8 lg:p-16 bg-white">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="flex justify-start mb-8">
                        <div className="w-12 h-12 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1 h-8 bg-[#2A2A2A] rounded-full"></div>
                                <div className="h-1 w-8 bg-[#2A2A2A] rounded-full absolute"></div>
                            </div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 w-1.5 h-1.5 bg-[#2A2A2A] rounded-full"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-1 w-1.5 h-1.5 bg-[#2A2A2A] rounded-full"></div>
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-1 w-1.5 h-1.5 bg-[#2A2A2A] rounded-full"></div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-1 w-1.5 h-1.5 bg-[#2A2A2A] rounded-full"></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Login to your Account</h2>
                        <p className="text-gray-500 text-sm">See what is going on with your business</p>
                    </div>

                    <button
                        onClick={() => alert('Google Sign In')}
                        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-lg py-2.5 px-4 mb-6 hover:bg-gray-50 transition-colors"
                    >
                        <FcGoogle className="text-xl" />
                        <span className="text-sm font-medium text-gray-600">Continue with Google</span>
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-gray-400 text-xs">or Sign in with Email</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="mail@abc.com"
                                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#7D2E58] transition-colors ${errors.email && touched.email ? 'border-red-400 bg-red-50' : 'border-gray-200'
                                    }`}
                            />
                            {errors.email && touched.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="................"
                                    className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#7D2E58] transition-colors ${errors.password && touched.password ? 'border-red-400 bg-red-50' : 'border-gray-200'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                                </button>
                            </div>
                            {errors.password && touched.password && (
                                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="w-3.5 h-3.5 rounded border-gray-300 text-[#7D2E58] focus:ring-[#7D2E58]"
                                />
                                <span className="text-xs text-gray-500">Remember Me</span>
                            </label>
                            <a href="#" className="text-xs font-medium text-[#7D2E58] hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#7D2E58] text-white font-medium py-2.5 rounded-lg hover:bg-[#6D2548] transition-colors disabled:opacity-70 text-sm"
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <p className="text-center mt-8 text-xs text-gray-500">
                        Not Registered Yet?{' '}
                        <a href="/signup" className="font-medium text-[#7D2E58] hover:underline">
                            Create an account
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
