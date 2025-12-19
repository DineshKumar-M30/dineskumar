import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Camera, Edit2, Save, X, Plus, Trash2 } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Profile = () => {
    const { user, updateProfile, addAddress, updateAddress, deleteAddress, setDefaultAddress } = useUser();
    const [isEditing, setIsEditing] = useState(false);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [previewImage, setPreviewImage] = useState(user.profileImage);
    const [errors, setErrors] = useState({});
    const fileInputRef = React.useRef(null);

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone
    });

    const [addressForm, setAddressForm] = useState({
        type: 'Home',
        line1: '',
        line2: '',
        city: '',
        state: '',
        pincode: ''
    });

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Phone must be 10 digits';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSaveProfile = () => {
        if (validate()) {
            updateProfile({ ...formData, profileImage: previewImage });
            setIsEditing(false);
            setErrors({});
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                if (!isEditing) setIsEditing(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCancelEdit = () => {
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone
        });
        setIsEditing(false);
    };

    const handleAddressSubmit = () => {
        if (editingAddress) {
            updateAddress(editingAddress.id, addressForm);
        } else {
            addAddress(addressForm);
        }
        setShowAddressModal(false);
        setEditingAddress(null);
        setAddressForm({
            type: 'Home',
            line1: '',
            line2: '',
            city: '',
            state: '',
            pincode: ''
        });
    };

    const handleEditAddress = (address) => {
        setEditingAddress(address);
        setAddressForm(address);
        setShowAddressModal(true);
    };

    const handleDeleteAddress = (addressId) => {
        if (window.confirm('Are you sure you want to delete this address?')) {
            deleteAddress(addressId);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Profile
                </h1>
                <p className="text-gray-600 dark:text-slate-400">
                    Manage your profile information and addresses
                </p>
            </div>

            {/* Profile Section */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                <div className="flex items-start justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Personal Information
                    </h2>
                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center gap-2 px-4 py-2 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors"
                        >
                            <Edit2 size={18} />
                            Edit
                        </button>
                    ) : (
                        <div className="flex gap-2">
                            <button
                                onClick={handleCancelEdit}
                                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                <X size={18} />
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveProfile}
                                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                            >
                                <Save size={18} />
                                Save
                            </button>
                        </div>
                    )}
                </div>

                {/* Profile Image */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-xl border-4 border-white dark:border-slate-800 overflow-hidden">
                            {previewImage ? (
                                <img src={previewImage} alt={user.name} className="w-full h-full object-cover" />
                            ) : (
                                user.name.charAt(0)
                            )}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                        <button
                            onClick={() => fileInputRef.current.click()}
                            className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors shadow-lg"
                        >
                            <Camera size={16} />
                        </button>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {user.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-slate-400">
                            Member since {new Date(user.joinedDate).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                </div>

                {/* Profile Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                            Full Name
                        </label>
                        <div className="relative">
                            <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value });
                                    if (errors.name) setErrors({ ...errors, name: null });
                                }}
                                disabled={!isEditing}
                                className={`w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 text-gray-900 dark:text-white disabled:opacity-60 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-slate-700 focus:ring-purple-600'
                                    }`}
                            />
                        </div>
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    if (errors.email) setErrors({ ...errors, email: null });
                                }}
                                disabled={!isEditing}
                                className={`w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 text-gray-900 dark:text-white disabled:opacity-60 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-slate-700 focus:ring-purple-600'
                                    }`}
                            />
                        </div>
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => {
                                    setFormData({ ...formData, phone: e.target.value });
                                    if (errors.phone) setErrors({ ...errors, phone: null });
                                }}
                                disabled={!isEditing}
                                className={`w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 text-gray-900 dark:text-white disabled:opacity-60 transition-all ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-slate-700 focus:ring-purple-600'
                                    }`}
                            />
                        </div>
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                </div>
            </div>

            {/* Addresses Section */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Saved Addresses
                    </h2>
                    <button
                        onClick={() => {
                            setEditingAddress(null);
                            setAddressForm({
                                type: 'Home',
                                line1: '',
                                line2: '',
                                city: '',
                                state: '',
                                pincode: ''
                            });
                            setShowAddressModal(true);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        <Plus size={18} />
                        Add Address
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {user.addresses.map((address) => (
                        <motion.div
                            key={address.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`p-4 rounded-xl border-2 transition-all ${address.isDefault
                                ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20'
                                : 'border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} className="text-purple-600 dark:text-purple-400" />
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {address.type}
                                    </span>
                                    {address.isDefault && (
                                        <span className="px-2 py-0.5 text-xs font-semibold bg-purple-600 text-white rounded-full">
                                            Default
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => handleEditAddress(address)}
                                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
                                    >
                                        <Edit2 size={14} className="text-gray-600 dark:text-slate-400" />
                                    </button>
                                    {!address.isDefault && (
                                        <button
                                            onClick={() => handleDeleteAddress(address.id)}
                                            className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                                        >
                                            <Trash2 size={14} className="text-red-600 dark:text-red-400" />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">
                                {address.line1}<br />
                                {address.line2}, {address.city}<br />
                                {address.state} - {address.pincode}
                            </p>
                            {!address.isDefault && (
                                <button
                                    onClick={() => setDefaultAddress(address.id)}
                                    className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                                >
                                    Set as default
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Address Modal */}
            {showAddressModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddressModal(false)}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            {editingAddress ? 'Edit Address' : 'Add New Address'}
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                    Address Type
                                </label>
                                <select
                                    value={addressForm.type}
                                    onChange={(e) => setAddressForm({ ...addressForm, type: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
                                >
                                    <option value="Home">Home</option>
                                    <option value="Office">Office</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                    Address Line 1
                                </label>
                                <input
                                    type="text"
                                    value={addressForm.line1}
                                    onChange={(e) => setAddressForm({ ...addressForm, line1: e.target.value })}
                                    placeholder="House/Flat No., Building Name"
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                    Address Line 2
                                </label>
                                <input
                                    type="text"
                                    value={addressForm.line2}
                                    onChange={(e) => setAddressForm({ ...addressForm, line2: e.target.value })}
                                    placeholder="Street, Area, Locality"
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        value={addressForm.city}
                                        onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        value={addressForm.state}
                                        onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                    Pincode
                                </label>
                                <input
                                    type="text"
                                    value={addressForm.pincode}
                                    onChange={(e) => setAddressForm({ ...addressForm, pincode: e.target.value })}
                                    maxLength={6}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setShowAddressModal(false)}
                                className="flex-1 px-6 py-3 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddressSubmit}
                                disabled={!addressForm.line1 || !addressForm.city || !addressForm.state || !addressForm.pincode}
                                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {editingAddress ? 'Update' : 'Add'} Address
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Profile;
