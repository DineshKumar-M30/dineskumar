import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CreditCard, Calendar, CheckCircle, XCircle, Clock, Filter } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { getTotalSpent } from '../data/mockUserData';

const Payments = () => {
    const { payments } = useUser();
    const [statusFilter, setStatusFilter] = useState('All');

    const statusOptions = ['All', 'Success', 'Pending', 'Refunded'];

    const filteredPayments = payments.filter(payment =>
        statusFilter === 'All' || payment.status === statusFilter
    );

    const totalSpent = getTotalSpent(payments);

    const statusConfig = {
        'Success': {
            icon: CheckCircle,
            color: 'text-green-600 dark:text-green-400',
            bgColor: 'bg-green-100 dark:bg-green-900/30'
        },
        'Pending': {
            icon: Clock,
            color: 'text-orange-600 dark:text-orange-400',
            bgColor: 'bg-orange-100 dark:bg-orange-900/30'
        },
        'Refunded': {
            icon: XCircle,
            color: 'text-blue-600 dark:text-blue-400',
            bgColor: 'bg-blue-100 dark:bg-blue-900/30'
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Payments & Invoices
                </h1>
                <p className="text-gray-600 dark:text-slate-400">
                    Track your payments and download invoices
                </p>
            </div>

            {/* Total Spent Card */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-purple-100 mb-2">Total Spent</p>
                        <h2 className="text-4xl font-bold">₹{totalSpent.toLocaleString()}</h2>
                        <p className="text-purple-100 mt-2">Across {payments.filter(p => p.status === 'Success').length} successful transactions</p>
                    </div>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <CreditCard size={40} />
                    </div>
                </div>
            </motion.div>

            {/* Filter */}
            <div className="flex items-center gap-4">
                <Filter size={20} className="text-gray-400" />
                <div className="flex gap-2">
                    {statusOptions.map(status => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${statusFilter === status
                                    ? 'bg-purple-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Payments List */}
            <div className="space-y-4">
                {filteredPayments.map((payment, index) => {
                    const config = statusConfig[payment.status];
                    const StatusIcon = config.icon;

                    return (
                        <motion.div
                            key={payment.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-full ${config.bgColor} flex items-center justify-center flex-shrink-0`}>
                                            <StatusIcon size={24} className={config.color} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                                                {payment.serviceName}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-slate-400">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    {new Date(payment.date).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                                <span>•</span>
                                                <span>{payment.method}</span>
                                                {payment.transactionId && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="font-mono text-xs">{payment.transactionId}</span>
                                                    </>
                                                )}
                                            </div>
                                            <div className="mt-2">
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${config.bgColor} ${config.color}`}>
                                                    {payment.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                            ₹{payment.amount.toLocaleString()}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-slate-400">
                                            ID: {payment.bookingId}
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium whitespace-nowrap">
                                        <Download size={16} />
                                        Invoice
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {filteredPayments.length === 0 && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-gray-200 dark:border-slate-800">
                    <CreditCard size={48} className="mx-auto text-gray-400 dark:text-slate-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        No payments found
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                        No payments match the selected filter
                    </p>
                </div>
            )}
        </div>
    );
};

export default Payments;
