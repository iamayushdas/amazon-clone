import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div classname="home">
            <div className="home_container">
                <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB658235929_.jpg"
                 alt="banner" />

                 <div className="home_row">
                    <Product 
                    title='The lean startup' 
                    price={29.99} 
                    image={
                       "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
                    }
                    rating={5}
                    />
                    
                    <Product />
                 </div>
                 <div className="home_row">
                     <Product />
                     <Product />
                     <Product />
                 </div>
                 <div className="home_row">
                     <Product />
                 </div>
            </div>
            
        </div>
    )
}

export default Home
