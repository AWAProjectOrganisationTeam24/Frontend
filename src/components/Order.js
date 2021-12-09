import React, {useState, useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router";
import {Link} from 'react-router-dom'
import axios from "axios";
import Constants from "./Constants.json";

function Order(props) {

    const items = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const [cartItems, setCart] = useState([]);
    const [price, setPrice] = useState('');

    const [state, setState] = useState({
        mail: '',
        customerName: '',
        deliveryAddress: '',
        status: 'ordered',
        paid: 1
    })

    function changeHandler(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }


    const submitHandler = async (e) => {
        console.log(params.id);
        if(params.id === 'non'){
            alert('You have to be logged in to order!');
           console.log('You have to be logged in to order!');
            navigate(`/login`, { replace: true });
        }else{
            if(state.money > price){
                //set time
                const d = new Date();
                const month = d.getMonth() + 1;
                const date = d.getDate() + '.' + month + '.'+ d.getFullYear();
                const time = d.getHours() + ':'+ d.getMinutes() + ':'+ d.getSeconds();


                const url = `http://localhost:5000/orders/add-order/${params.id_restaurant}/${params.id}`
                axios.post( url, {
                    price: price,
                    time: time,
                    date: date,
                    status: state.status,
                    content: cartItems[0].name,
                    paid: state.paid
                })
                    .then(res => {
                        navigate(`/${params.id_customer}`, {replace: true});
                    })
                    .catch(err => console.log('error'));
            }else{
                alert('You dont have enought money!');
                console.log('You dont have enought money!');
                navigate(`/profile/${params.id}`, { replace: true });
            }
            }

    };
    useEffect(() => {
        setCart(items.state.cartItems);
        setPrice(items.state.itemsPrice);
    });


    return(
          <div>
              <h3>Order: </h3>
                  {cartItems.map((e) =>
                      <div key={e.id}>
                          <div>id: {params.id}</div>
                          <div>Name: {e.name}</div>
                          <div>Dish: {e.qty}x
                              {e.price}€</div>
                          <hr/>
                      </div>
                  )}
                <div>Total: {price}€ </div>
                <div>Money: {state.money}€</div>
                <div>Enter ordering information:</div>
                <div>
                    <form>
                        <div className="form-container">
                            <div>
                                <label>Email</label>
                                  <input name="mail"
                                         type="text"
                                         value={state.mail}
                                         onChange={changeHandler}
                                         required
                                  />

                            </div>
                            <div>
                                <label>Name</label>
                                  <input
                                    name="customerName"
                                    type="text"
                                    value={state.customerName}
                                    onChange={changeHandler}
                                    required
                                  />
                            </div>
                            <div>
                                <label>Delivery location</label>
                                  <input
                                    name="deliveryAddress"
                                    type="text"
                                    value={state.deliveryAddress}
                                    onChange={changeHandler}
                                    required
                                  />
                            </div>
                            <Link to={{pathname:`/profile/${params.id}`}}>
                                <button onClick={() => submitHandler()}>Pay</button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>
  );
}

export default Order;
