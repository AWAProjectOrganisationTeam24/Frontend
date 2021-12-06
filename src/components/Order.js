import React from "react";
import { useLocation } from "react-router";
import profiledata from './Data/ProfileData';
import {Link} from 'react-router-dom'



function Order(props) {

  const items = useLocation();
  const {cartItems, itemsPrice} = items.state;
  const CustomerNUM = 1;

  return(
  <div>
  <h3>Order: </h3>
  {cartItems.map(e => 
      <div key={e.id}>
          <div>Name: {e.foodName}</div>
          <div>Dish: {e.qty}x
          {e.foodprize}€</div>
          <hr/>
      </div>
      )}
      <div>Total: {itemsPrice}€ </div>
      {profiledata.filter(profile => profile.id_customer == CustomerNUM).map(filteredPerson => (
          <div>Money: {filteredPerson.money}€</div>
      ))}
      <div>Enter ordering information:</div>
      <div>
      <form>
                    <ul className="form-container">
                        <div>
                          <label>Email</label>
                          <input
                            name="email"
                            type="text"
                            required
                          ></input>
                        </div>
                        <div>
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                          ></input>
                          </div>
                          <div>
                          <label>Delivery location</label>
                          <input
                            name="address"
                            type="text"
                            required
                          ></input>
                          </div>
                        
                          <Link to={{pathname: "/profile/:id"}}
                         state={{cartItems, itemsPrice
                         }}>
                           <button>Pay and go to profile</button>
                         </Link>
                        
                      </ul>
          </form>
        </div>
  </div>
  );
}

export default Order;
