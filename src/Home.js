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
                    id="12321341" 
                    title='The lean startup' 
                    price={29.99} 
                    image={
                       "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    }
                    rating={5}
                    />
                    
                    <Product
                    id="49538094" 
                    title='New Apple iPhone 12 Mini (64GB) - Black' 
                    price={239.0} 
                    image={
                       "https://images-na.ssl-images-amazon.com/images/I/71uuDYxn3XL._SL1500_.jpg"
                    }
                    rating={5}
                    />
                 </div>
                 <div className="home_row">
                     <Product
                    id="4903850" 
                    title='SanDisk Cruzer Blade SDCZ50-016G-135 16GB USB 2.0 Pen Drive' 
                    price={199} 
                    image={
                       "https://images-na.ssl-images-amazon.com/images/I/61PVIzk6ALL._SL1104_.jpg"
                    }
                    rating={4}
                    />
                     <Product
                    id="1232777" 
                    title='boAt Rockerz 510 Bluetooth On-Ear Headphone with Mic(Furious Blue)' 
                    price={299.0} 
                    image={
                       "https://images-na.ssl-images-amazon.com/images/I/61vnVLC35FL._SL1500_.jpg"
                    }
                    rating={3}
                    />
                     <Product
                    id="12321341" 
                    title='Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)' 
                    price={592} 
                    image={
                       "https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
                    }
                    rating={5}
                    />
                 </div>
                 <div className="home_row">
                     <Product
                    id="12321341" 
                    title='' 
                    price={598.8} 
                    image={
                       "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
                    }
                    rating={5}
                    />
                 </div>
            </div>
            
        </div>
    )
}

export default Home
