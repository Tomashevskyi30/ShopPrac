import React from 'react';
import './Product.css'
import {Link} from "react-router-dom";
function Product({imageUrl,name,price,desc,productId}) {
    return (
        <div className="product">
            <img
                src={imageUrl}
                alt={name}/>
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__desc">{desc.substring(0,100)}...</p>
                <p className="info__price">${price}</p>
                <Link to={`/product/${productId}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    );
}

export default Product;