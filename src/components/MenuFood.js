import React from 'react'
import "./partials/RestaurantCard.css"
import resimg from "./res.jpeg";


function ProductCard(props) {
  const { product, onAdd } = props;

  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={resimg} alt=" cap4" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>

          <address className="card-text">$ {product.price} euro</address>
          <small className="">
            <span className="badge badge-success">available</span>
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
