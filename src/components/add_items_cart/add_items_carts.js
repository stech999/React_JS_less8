import React, { createContext, useState, useEffect } from "react";
export const AddItems = createContext();

const AddItemstProvider = (props) => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems")) || []
    );

    const addToCart = (itemsID) => {
        setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find((item) => item.id === itemsID);
            if (existingItem) {
                return prevCartItems.map((item) =>
                    item.id === itemsID
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCartItems, { id: itemsID, quantity: 1 }];
            }
        });
    };

    const removeItems = (itemsID) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemsID)
        );
    };

    const updateItems = (itemsID, quantityChange) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === itemsID
                    ? {
                        ...item,
                        quantity: Math.max(1, quantityChange),
                    }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <AddItems.Provider
            value={{
                cartItems,
                addToCart,
                removeItems,
                clearCart,
                updateItems,
            }}
        >
            {props.children}
        </AddItems.Provider>
    );
};

export default AddItemstProvider;