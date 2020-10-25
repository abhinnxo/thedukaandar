import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
// import Card from "./components/Card"

import "./components/css/card.css"
import productImage from "./components/img/productDisplay.png"
import star from "./components/svg/star.svg"
import { matchedData } from "./javascript/productSearch"


function product() {

    return (
        <div>
           <Navbar />
           {/* <Card /> */}

            <div>
            <h3 className="card-search-for"><strong>Search Results for... </strong></h3>
            {
                matchedData.map((data, index) => 
                   <div key={index} className="card-container">
                <div className="card-image">
                    <img src={productImage} alt="Product Display" width="200px" />
                </div>
                <div className="card-info">
                    <h5 className="card-title"><strong>{data.name}</strong></h5>
                    <p className="card-price">{data.price}</p>
                    <p className="card-rating">{data.rating}</p>
                    <p className="card-stock"><strong>Stock: </strong><span>{data.stock}</span></p>
                    <h6 className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae excepturi doloribus quis debitis consequuntur, quaerat amet impedit. Non, corporis.</h6>
                    <button className="cart-add-to-cart">Add to Cart</button>
                    <img src={star} alt="Favrouite" className="card-fav-star" width="25px"/>
                    <span className="card-fav" >Favoruite</span>
                </div>
            </div> 
                )
            }
        </div>


           <Footer /> 
        </div>
    )
}

export default product
