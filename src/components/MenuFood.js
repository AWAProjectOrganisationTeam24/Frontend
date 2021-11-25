import React from 'react'
import "./partials/RestaurantCard.css"

function ProductCard(props) {
    const { product, onAdd } = props;
    console.log("myproducts")
    console.log(product)

    return (
        <div>
        <div class="cards">
            <div>
            <img src="./pizza-img.png" alt="product_img"/>
            <p class="product-name">{product.foodName}</p>
            <h3 class="price">$ {product.foodprize} euro</h3>
            <p>{product.fooddetails}</p>
            

            <button onClick={() => onAdd(product)}>Add to cart</button>
            

            </div>

        </div>
        </div>
     
    )
}

export default ProductCard
