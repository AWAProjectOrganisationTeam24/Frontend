import React from 'react';


export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.foodprize, 0);
    console.log("shoppingprops");
    console.log(props);
    console.log("AAAAAAAAA");
    console.log(itemsPrice);
  return (
    <div >
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div >{item.foodName}</div>
            <div>
              <button onClick={() => onRemove(item)} >
                -
              </button>{' '}
              <button onClick={() => onAdd(item)}>
                +
              </button>
            </div>

            <div >
              {item.qty} x ${item.foodprize.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div >
              <div>Items Price</div>
              <div>${itemsPrice.toFixed(2)}</div>
            </div>
            <hr />
            <div>
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
