import React, { useContext } from 'react';
import { CartContext } from './cartContext';
import '../card.css'

const CartComponent = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

    return (
        <div className="cart_container">
            <h1>Your Cart</h1>
            <div className='CartCard'>
            {cart.map((item, index) => (
                <ul key={index}>
                    <h2>{item.title}</h2>
                    <div>
                    <p>Kshs: {item.price}</p>
                    </div>
                    <div>
                        <p>Quantity:{item.quantity}</p>
                    </div>
                    <div>
                        <button onClick={() => removeFromCart(item.productID)}>Remove</button>
                    </div>
                    <div>
                        <button onClick={() => decrementQuantity(item.productID)}>-</button>
                        <button onClick={() => incrementQuantity(item.productID)}>+</button>
                    </div>
                </ul>
            ))}
        </div>
        </div>
    );
};

export default CartComponent;
