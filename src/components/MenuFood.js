


import React from 'react'
import "./partials/RestaurantCard.css"
import resimg from "./res.jpeg";


function ProductCard(props) {
  const { product, onAdd } = props;
  console.log("myproducts");
  console.log(product);

  return (
    <div>
      <div class="card">
        <img class="card-img-top" src={resimg} alt=" cap4" />
        <div class="card-body">
          <h5 class="card-title">{product.foodName}</h5>

          <address class="card-text">$ {product.foodprize} euro</address>
          <small className="">
            <span class="badge badge-success">available</span>
            <button onClick={() => onAdd(product)} className="btn btn-warning">
              + Add to cart
            </button>
          </small>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
