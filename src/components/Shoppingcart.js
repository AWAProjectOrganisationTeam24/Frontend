import React from "react";

import resimg from "./res.jpeg";
// import Styles from './Shoppingcart.css'
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.foodprize, 0);
  console.log("shoppingprops");
  console.log(props);
  console.log("AAAAAAAAA");
  console.log(itemsPrice);
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-7"></div>
          <div className="col-md-5">
            <div className="card cart">
              <div className="card-body">
                <h2>Cart Items</h2>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <img src={resimg} class="card-img-top" alt="cart-img" />
                    <h4>{item.foodName}</h4>

                    <button
                      onClick={() => onRemove(item)}
                      className="btn btn-warning"
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => onAdd(item)}
                    >
                      +
                    </button>

                    <div>
                      {item.qty} x ${item.foodprize.toFixed(2)}
                    </div>
                  </div>
                ))}

                {cartItems.length !== 0 && (
                  <>
                    <hr></hr>
                    <div>
                      <div>Total Price</div>
                      <div>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <hr />
                    <div>
                      <button
                        className="btn btn-success"
                        onClick={() => alert("Implement Checkout!")}
                      >
                        Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
