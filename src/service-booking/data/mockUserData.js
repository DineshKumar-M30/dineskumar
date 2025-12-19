// Mock user data for dashboard
export const mockUser = {
    id: 'user-001',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+91 98765 43210',
    profileImage: null, // Will be set via upload
    joinedDate: '2024-01-15',
    addresses: [
        {
            id: 'addr-1',
            type: 'Home',
            line1: 'A-402, Green Valley Apartments',
            line2: 'Sector 18',
            city: 'Noida',
            state: 'Uttar Pradesh',
            pincode: '201301',
            isDefault: true
        },
        {
            id: 'addr-2',
            type: 'Office',
            line1: 'Tower B, 5th Floor',
            line2: 'Cyber City',
            city: 'Gurugram',
            state: 'Haryana',
            pincode: '122002',
            isDefault: false
        }
    ]
};

// Mock bookings with various statuses
export const mockBookings = [
    {
        id: 'BK001',
        serviceId: 'ac-1',
        serviceName: 'Power Saver AC Service',
        serviceImage: '/images/ac_service.png',
        category: 'AC Service & Repair',
        date: '2024-12-20',
        time: '14:00',
        price: 599,
        discount: 50,
        finalPrice: 549,
        status: 'Booked',
        address: mockUser.addresses[0],
        professional: {
            name: 'Rajesh Kumar',
            rating: 4.9,
            reviews: 2500,
            phone: '+91 98123 45678'
        },
        addOns: ['Gas Check', 'Filter Cleaning'],
        paymentMethod: 'UPI',
        paymentStatus: 'Paid',
        bookingDate: '2024-12-18T10:30:00',
        estimatedDuration: '45 mins'
    },
    {
        id: 'BK002',
        serviceId: 'clean-1',
        serviceName: 'Full Home Deep Cleaning',
        serviceImage: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop&q=80',
        category: 'Cleaning & Pest Control',
        date: '2024-12-19',
        time: '10:00',
        price: 3999,
        discount: 0,
        finalPrice: 3999,
        status: 'In Progress',
        address: mockUser.addresses[0],
        professional: {
            name: 'Priya Sharma',
            rating: 4.8,
            reviews: 1800,
            phone: '+91 98234 56789'
        },
        addOns: ['Balcony Cleaning', 'Kitchen Deep Clean'],
        paymentMethod: 'Cash',
        paymentStatus: 'Pending',
        bookingDate: '2024-12-17T15:20:00',
        estimatedDuration: '4-5 hrs'
    },
    {
        id: 'BK003',
        serviceId: 'salon-1',
        serviceName: 'Waxing - Full Arms + Legs',
        serviceImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400&h=300',
        category: 'Salon for Women',
        date: '2024-12-15',
        time: '16:00',
        price: 499,
        discount: 0,
        finalPrice: 499,
        status: 'Completed',
        address: mockUser.addresses[0],
        professional: {
            name: 'Neha Verma',
            rating: 4.9,
            reviews: 3200,
            phone: '+91 98345 67890'
        },
        addOns: ['Face Wax'],
        paymentMethod: 'Card',
        paymentStatus: 'Paid',
        bookingDate: '2024-12-14T09:15:00',
        estimatedDuration: '45 mins',
        completedDate: '2024-12-15T17:00:00',
        rating: 5,
        review: 'Excellent service! Very professional and gentle.'
    },
    {
        id: 'BK004',
        serviceId: 'ac-2',
        serviceName: 'AC Gas Refill',
        serviceImage: '/images/ac_service.png',
        category: 'AC Service & Repair',
        date: '2024-12-10',
        time: '11:00',
        price: 2499,
        discount: 100,
        finalPrice: 2399,
        status: 'Completed',
        address: mockUser.addresses[1],
        professional: {
            name: 'Amit Singh',
            rating: 4.7,
            reviews: 1500,
            phone: '+91 98456 78901'
        },
        addOns: ['Leakage Check'],
        paymentMethod: 'UPI',
        paymentStatus: 'Paid',
        bookingDate: '2024-12-08T14:30:00',
        estimatedDuration: '60 mins',
        completedDate: '2024-12-10T12:15:00',
        rating: 4,
        review: 'Good service, AC is cooling well now.'
    },
    {
        id: 'BK005',
        serviceId: 'clean-2',
        serviceName: 'Bathroom Deep Cleaning',
        serviceImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=300',
        category: 'Cleaning & Pest Control',
        date: '2024-12-05',
        time: '09:00',
        price: 899,
        discount: 0,
        finalPrice: 899,
        status: 'Cancelled',
        address: mockUser.addresses[0],
        professional: null,
        addOns: [],
        paymentMethod: 'UPI',
        paymentStatus: 'Refunded',
        bookingDate: '2024-12-03T18:45:00',
        estimatedDuration: '60 mins',
        cancelledDate: '2024-12-04T10:00:00',
        cancellationReason: 'Schedule conflict'
    },
    {
        id: 'BK006',
        serviceId: 'ac-1',
        serviceName: 'Power Saver AC Service',
        serviceImage: '/images/ac_service.png',
        category: 'AC Service & Repair',
        date: '2024-11-28',
        time: '15:00',
        price: 599,
        discount: 50,
        finalPrice: 549,
        status: 'Completed',
        address: mockUser.addresses[0],
        professional: {
            name: 'Vikram Patel',
            rating: 4.8,
            reviews: 2100,
            phone: '+91 98567 89012'
        },
        addOns: ['Gas Check'],
        paymentMethod: 'Cash',
        paymentStatus: 'Paid',
        bookingDate: '2024-11-26T11:20:00',
        estimatedDuration: '45 mins',
        completedDate: '2024-11-28T15:50:00',
        rating: 5,
        review: 'Very satisfied with the service!'
    }
];

// Mock notifications
export const mockNotifications = [
    {
        id: 'notif-1',
        type: 'booking',
        title: 'Booking Confirmed',
        message: 'Your booking for Power Saver AC Service has been confirmed for Dec 20, 2:00 PM',
        timestamp: '2024-12-18T10:30:00',
        read: false,
        bookingId: 'BK001'
    },
    {
        id: 'notif-2',
        type: 'status',
        title: 'Service In Progress',
        message: 'Your Full Home Deep Cleaning service has started',
        timestamp: '2024-12-19T10:05:00',
        read: false,
        bookingId: 'BK002'
    },
    {
        id: 'notif-3',
        type: 'offer',
        title: 'Special Offer!',
        message: 'Get 20% off on your next AC service. Use code WINTER20',
        timestamp: '2024-12-18T09:00:00',
        read: true
    },
    {
        id: 'notif-4',
        type: 'booking',
        title: 'Service Completed',
        message: 'Your Waxing service has been completed. Please rate your experience.',
        timestamp: '2024-12-15T17:00:00',
        read: true,
        bookingId: 'BK003'
    },
    {
        id: 'notif-5',
        type: 'payment',
        title: 'Refund Processed',
        message: 'Your refund of ₹899 has been processed for cancelled booking',
        timestamp: '2024-12-04T12:00:00',
        read: true,
        bookingId: 'BK005'
    }
];

// Mock payment history
export const mockPayments = [
    {
        id: 'PAY001',
        bookingId: 'BK001',
        serviceName: 'Power Saver AC Service',
        amount: 549,
        date: '2024-12-18',
        method: 'UPI',
        status: 'Success',
        transactionId: 'TXN1234567890'
    },
    {
        id: 'PAY002',
        bookingId: 'BK002',
        serviceName: 'Full Home Deep Cleaning',
        amount: 3999,
        date: '2024-12-17',
        method: 'Cash',
        status: 'Pending',
        transactionId: null
    },
    {
        id: 'PAY003',
        bookingId: 'BK003',
        serviceName: 'Waxing - Full Arms + Legs',
        amount: 499,
        date: '2024-12-14',
        method: 'Card',
        status: 'Success',
        transactionId: 'TXN0987654321'
    },
    {
        id: 'PAY004',
        bookingId: 'BK004',
        serviceName: 'AC Gas Refill',
        amount: 2399,
        date: '2024-12-08',
        method: 'UPI',
        status: 'Success',
        transactionId: 'TXN1122334455'
    },
    {
        id: 'PAY005',
        bookingId: 'BK005',
        serviceName: 'Bathroom Deep Cleaning',
        amount: 899,
        date: '2024-12-04',
        method: 'UPI',
        status: 'Refunded',
        transactionId: 'TXN5544332211'
    },
    {
        id: 'PAY006',
        bookingId: 'BK006',
        serviceName: 'Power Saver AC Service',
        amount: 549,
        date: '2024-11-26',
        method: 'Cash',
        status: 'Success',
        transactionId: null
    }
];

// Helper functions
export const getBookingStats = (bookings) => {
    return {
        total: bookings.length,
        upcoming: bookings.filter(b => b.status === 'Booked').length,
        completed: bookings.filter(b => b.status === 'Completed').length,
        cancelled: bookings.filter(b => b.status === 'Cancelled').length,
        inProgress: bookings.filter(b => b.status === 'In Progress').length
    };
};

export const getUnreadNotifications = (notifications) => {
    return notifications.filter(n => !n.read).length;
};

export const getTotalSpent = (payments) => {
    return payments
        .filter(p => p.status === 'Success')
        .reduce((total, p) => total + p.amount, 0);
};
