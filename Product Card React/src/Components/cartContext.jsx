import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (shoe) => {
        setCart((prevCart) => {
            const existingShoe = prevCart.find(item => item.productID === shoe.productID);
            if (existingShoe) {
                return prevCart.map(item =>
                    item.productID === shoe.productID
                        ? { ...item, quantity: item.quantity + 1, price: item.basePrice * (item.quantity + 1) }
                        : item
                );
            }
            return [...prevCart, { ...shoe, quantity: 1, basePrice: shoe.price }];
        });
    };

    const removeFromCart = (shoeID) => {
        setCart(cart.filter(item => item.productID !== shoeID));
    };

    const incrementQuantity = (shoeID) => {
        setCart(cart.map(item =>
            item.productID === shoeID
                ? { ...item, quantity: item.quantity + 1, price: item.basePrice * (item.quantity + 1) }
                : item
        ));
    };

    const decrementQuantity = (shoeID) => {
        setCart(cart.map(item =>
            item.productID === shoeID
                ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1, price: item.basePrice * (item.quantity > 1 ? item.quantity - 1 : 1) }
                : item
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
