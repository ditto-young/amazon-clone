import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__continer">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.
                    com/images/G/02/digital/video/merch2016/
                    Hero/Covid19/Generic/
                    GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x
                    600_PV_en-GB._CB428684220.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        title="The lean startup" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/
                        images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product/>
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_000000007_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="32543454345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) = Silver (4th Generation)"
                        price={598.99}
                        ratin={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home
