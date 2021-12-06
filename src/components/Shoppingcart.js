import React, { Component } from "react";
import resimg from "./res.jpeg";
import { Link } from "react-router-dom";
import styles from "./Shoppingcart.module.css";
  class Shoppingcart extends Component {
    render(){
      const {cartItems, onAdd, onRemove} = this.props;
      const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.foodprize, 0);
      return(
        <div>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-7"></div>
                <div className="col-md-5">
                  <div className="card cart">
                    <div className="card-body"></div>
          {cartItems.length === 0 && <div className={styles.header}>Cart is empty</div>}
          <div classname={styles.container}>
            <div className={styles.item}>
            {cartItems.map((item) => (
              <div key = {item.id}>
                <img src={resimg} class="card-img-top" alt="cart-img" />
                <h4>{item.foodName}</h4>
                <div className={styles.cost}>
                  <div>
                {item.qty} x ${item.foodprize.toFixed(2)}
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
                  <Link to={{pathname:'/restaurant/menu/:id/order'}}
                         state={{cartItems, itemsPrice}}>
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