/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    }

    const removeFromCart = (pid) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== pid));
    }

    const clearCart = () => {
        setCart([]);
    };

    const orderItem = (pid) => {
        const orderedProduct = cart.find((item) => item._id === pid);
        if (orderedProduct) {
            setOrders((prevOrders) => [...prevOrders, orderedProduct]);
            removeFromCart(pid);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, orderItem, orders }}>
            {children}
        </CartContext.Provider>
    );
}
