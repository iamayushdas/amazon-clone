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

                 <div className="nome_row">
                    <Product />
                    {/* <Product /> */}
                 </div>
                 <div className="home_row">
                    {/* product */}
                    {/* product */}
                    {/* product */}
                 </div>
                 <div className="home_row">
                    {/* product */}
                 </div>
            </div>
            
        </div>
    )
}

export default Home
