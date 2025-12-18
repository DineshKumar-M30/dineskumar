import { Wrench, Scissors, Zap, Droplet, Truck, Home, Star, Battery } from 'lucide-react';

export const categories = [
    {
        id: 'ac-repair',
        name: 'AC Service & Repair',
        icon: 'Snowflake', // Using string for now, will map keys to icons
        color: 'bg-blue-100 text-blue-600',
        image: 'https://images.unsplash.com/photo-1621905476059-5f2779354375?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
        id: 'salon-women',
        name: 'Salon for Women',
        icon: 'Scissors',
        color: 'bg-pink-100 text-pink-600',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
        id: 'electrician',
        name: 'Electrician',
        icon: 'Zap',
        color: 'bg-yellow-100 text-yellow-600',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=300&fit=crop&q=80'
    },
    {
        id: 'cleaning',
        name: 'Cleaning & Pest Control',
        icon: 'Droplet',
        color: 'bg-green-100 text-green-600',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop&q=80'
    },
    {
        id: 'plumber',
        name: 'Plumbers',
        icon: 'Wrench',
        color: 'bg-orange-100 text-orange-600',
        image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
        id: 'moving',
        name: 'Packers & Movers',
        icon: 'Truck',
        color: 'bg-indigo-100 text-indigo-600',
        image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=300&h=300'
    },
];

export const popularServices = [
    {
        id: 'ac-service',
        title: 'Power Saver AC Service',
        rating: 4.8,
        reviews: '12k',
        price: 599,
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop&q=80'
    },
    {
        id: 'massage',
        title: 'Stress Relief Massage',
        rating: 4.9,
        reviews: '8.5k',
        price: 999,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=300'
    }
];

export const services = [
    // AC Repair
    {
        id: 'ac-1',
        categoryId: 'ac-repair',
        name: 'Power Saver AC Service',
        rating: 4.8,
        reviews: 12500,
        price: 599,
        originalPrice: 999,
        description: 'Advanced cleaning of indoor & outdoor units with foam jet technology.',
        time: '45 mins',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop&q=80',
        features: ['Foam Jet Technology', 'Gas Check', '30 Days Warranty']
    },
    {
        id: 'ac-2',
        categoryId: 'ac-repair',
        name: 'AC Gas Refill',
        rating: 4.7,
        reviews: 8000,
        price: 2499,
        originalPrice: 3000,
        description: 'Complete gas refill for split or window AC.',
        time: '60 mins',
        image: 'https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?auto=format&fit=crop&q=80&w=400&h=300',
        features: ['Leakage Check', 'Gas Refill', 'Performance Test']
    },

    // Cleaning
    {
        id: 'clean-1',
        categoryId: 'cleaning',
        name: 'Full Home Deep Cleaning',
        rating: 4.9,
        reviews: 2100,
        price: 3999,
        originalPrice: 5500,
        description: 'Top to bottom deep cleaning of your entire home.',
        time: '4-5 hrs',
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop&q=80',
        features: ['Machine Scrubbing', 'Stain Removal', 'Germ Protection']
    },
    {
        id: 'clean-2',
        categoryId: 'cleaning',
        name: 'Bathroom Deep Cleaning',
        rating: 4.8,
        reviews: 5000,
        price: 899,
        originalPrice: 1200,
        description: 'Intense cleaning of tiles, taps, and sanitary ware.',
        time: '60 mins',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=300',
        features: ['Scale Removal', 'Disinfection', 'Shine Restoration']
    },

    // Salon
    {
        id: 'salon-1',
        categoryId: 'salon-women',
        name: 'Waxing - Full Arms + Legs',
        rating: 4.8,
        reviews: 15000,
        price: 499,
        originalPrice: 800,
        description: 'Honey wax for smooth and glowing skin.',
        time: '45 mins',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400&h=300',
        features: ['Hygienic', 'Less Painful', 'Experienced Pros']
    }
];
