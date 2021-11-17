import React from 'react'
import "./FoodCard.css"
function ProductCard({foodName,foodprize,fooddetails}) {
  
    return (
        <div>
        <div class="cards">
            <div>
            <img src="./pizza-img.png" alt="product_img"/>
            <p class="product-name">{foodName}</p>
            <h3 class="price">$ {foodprize} euro</h3>
            <p>{fooddetails}</p>

            <button>Add to cart</button>
            

            </div>

        </div>
        </div>
     
    )
}

export default ProductCard