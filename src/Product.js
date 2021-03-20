import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    console.log("this is the basket >>> ", basket);
    const addToBasket = () => {
        // DISPATCH THE ITEM TO DATA LAYER
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                      <p>🌟</p>  
                    ))}
                    
                   
                </div>
            </div>
            
            <img src={image} alt="" srcset=""/>

            <button onClick={addToBasket}>Add to Basket</button>
        
        </div>
    )
}

export default Product
