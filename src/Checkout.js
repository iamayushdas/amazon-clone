import React from 'react'
import "./Checkout.css";
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG" alt=""/>
            </div>
            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
            </div>
        </div>
    )
}

export default Checkout
