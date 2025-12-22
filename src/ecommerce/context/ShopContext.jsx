import React, { createContext, useState, useEffect, useContext } from 'react';
import { products } from '../data/products';
import { toast } from 'react-hot-toast';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                toast.success(`Updated ${product.name} quantity in cart`);
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            toast.success(`${product.name} added to cart`);
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
        toast.error('Item removed from cart');
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prev =>
            prev.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item)
        );
    };

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const isInWishlist = prev.find(item => item.id === product.id);
            if (isInWishlist) {
                toast.error('Removed from wishlist');
                return prev.filter(item => item.id !== product.id);
            }
            toast.success('Added to wishlist');
            return [...prev, product];
        });
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal; // Can add tax/shipping logic here

    return (
        <ShopContext.Provider value={{
            products,
            cartItems,
            wishlist,
            theme,
            addToCart,
            removeFromCart,
            updateQuantity,
            toggleWishlist,
            toggleTheme,
            clearCart,
            subtotal,
            total
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);
