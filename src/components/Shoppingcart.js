
import React from 'react';
import resimg from "./res.jpeg";


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
                      className="btn btn-warning text-white"
                    >
                      <i class="fas fa-cart-arrow-down"></i>
                    </button>
                    <button
                      className=" text-white btn btn-sm btn-warning"
                      onClick={() => onAdd(item)}
                    >
                      <i class="fas fa-cart-plus"></i>
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
                    {/* location */}
                    <div className="form-group">
                      <label >Select Delivery Location</label>
                      <select className="form-control">
                        <option>location one</option>
                        <option>location one</option>
                        <option>location one</option>

                      </select>
                    </div>
                    <p>Select payment Method</p>
                    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  
  <label class="form-check-label" for="defaultCheck1">
  <i class="fab  fa-cc-paypal"></i> Paypal 
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  
  <label class="form-check-label" for="defaultCheck1">
  <i class="fab fa-cc-visa"></i> Visa card
  </label>
</div>
                    {/* payme */}
                    <div>
                      <button
                        className="btn btn-success"
                        onClick={() => alert("Implement Checkout!")}
                      >
                        Checkout <i class="fas fa-shopping-cart"></i>
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
