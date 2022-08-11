import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
const ProductDetail = () => {
    const products = useSelector(state => state.products);
 
    const { id } = useParams();
    const product = products.find( item => item.id === Number(id) )





    return (
        <div className='detailProduct'>
            <div className='bxImg'>
                <img src={product.productImgs[0]} alt={product?.title} />
            </div>
            <h2>{product?.title}</h2>
            <div className='price_quantity'>
                <div className="price">
                    <p>Price</p>
                    <p>$ 1300.00</p>
                </div>
                <div className="quantity">
                <p>Quantity</p>
                    <div className="select-quantity">
                        <button className='btn-circle'>-</button>
                        <input type="text" defaultValue={"1"} />
                        <button  className='btn-circle'>+</button>
                    </div>
                </div>
            </div>
            <button className='addCart'>Add to cart </button>
            <p className='description'>{product.description}</p>
        </div>
    );
};

export default ProductDetail;