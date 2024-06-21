import React from 'react';

const ProductComponent = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Price: Kshs:{product.price}</p>
        </div>
    );
};

export default ProductComponent;
