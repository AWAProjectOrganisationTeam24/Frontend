import React from "react";
import "./FoodCard.css";
import resimg from "./res.jpeg";

import {Link} from 'react-router-dom';

function ProductCard({ restaurantsName, location, address, status }) {
  return (
    <div>
      <div class="card mt-4">
        <img class="card-img-top" src={resimg} alt="cap1" />
        <div class="card-body">
          <h5 class="card-title">{restaurantsName}</h5>
          <i className="fas fa-solid fa-map-marker-alt"></i>
          <small> {location}</small>
          <address class="card-text">{address}</address>
          <small className="">
          
            <span class="badge badge-success">{status}</span>
          </small>
          <button className="btn btn-outline-success"><Link to='/restaurant/menu/id/'>View Restaurant</Link></button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
