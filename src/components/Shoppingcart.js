import React, { Component } from "react";
import resimg from "./res.jpeg";
import { Link } from "react-router-dom";
import styles from "./Shoppingcart.module.css";

  class Shoppingcart extends Component {
    render(){
      const {cartItems, onAdd, onRemove, id_restaurant, id} = this.props;

      const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
      return(
        <div>
          <div className="container">
            <div className="row mt-4">
                <div className="col-md-5">
                  <div className="card cart">
          {cartItems.length === 0 && <div className={styles.header}>Cart is empty</div>}
          <div>
            <div className={styles.item}>
            {cartItems.map((item) => (
              <div key = {item.id}>
                <img src={resimg} className="card-img-top" alt="cart-img" />
                <h4>{item.name}</h4>
                <div className={styles.cost}>
                  <div>
                {item.qty} x ${item.price.toFixed(2)}
                  </div>
                <button className= {styles.itemButton} onClick={() => onRemove(item)}>
                -
                </button>
                <button
                  className= {styles.itemButton} onClick={() => onAdd(item)}>
                      +
                </button>
                </div>
              </div>
            ))}
            </div>
          </div>
          {cartItems.length !== 0 && (
            <>
            
            <div>
              <div className={styles.cart}>
                <div className= {styles.total}>
                  <div>
                  <div>Total Price</div>
                  <div>${itemsPrice}</div>

                  </div>
                  <Link to={{pathname:`/makeOrder/${id_restaurant}/${id}`,
                      state: { cartItems, itemsPrice },
                  }}

                        state={{ cartItems, itemsPrice}}>
                           <button>Proceed</button>
                         </Link>
                </div>
              </div>
            </div>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  </div>

      )
    }

  }

  export default Shoppingcart;