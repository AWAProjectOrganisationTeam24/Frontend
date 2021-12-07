import styles from './Profile.module.css'
import Restaurantdata from '../Data/ProfileRestData';
import Orderdata from '../Data/ProfileOrderData';
import { Link } from "react-router-dom";
import react from 'react';
import axios from "axios";
import {useParams} from "react-router";
import * as React from "react";
import {useEffect} from "react/cjs/react.production.min";


function App() {
  const id_restaurant = useParams();
  const [state, setState] = React.useState('');


  useEffect(() => {
  axios.get(`http://localhost:5000/orders/restaurant/${id_restaurant.id}`)
      .then(res => {
      const data = res.data;
      setState(data[0]);
      })
      .catch(err => console.log('error'));
      }, [id_restaurant.id]);


  function changeHandler(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }
  function submitHandler(e) {
    e.preventDefault();

    axios.post(`http://localhost:5000/orders/edit-order-restaurant/${id_restaurant.id}`, {
      id_order: state.id_order,
      id_customer: state.id_customer,
      id_restaurant: state.id_restaurant,
      price: state.price,
      time: state.time,
      date: state.date,
      status: state.status,
      content: state.content,
      paid: state.paid
    })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
  }
   function changeValue(value) {
    console.log(value);
    document.getElementById('status').innerHTML=value;
    console.log(value);
  }

  return (
    <div className={styles.Profiletext}>
        <div> 
        RestarauntName: {state.name}

          </div>
          City: {state.city}
          <div>Address: {state.address}</div>
          <div></div>
          <Link to="/productMaker">New Menu Item</Link>
      
      <h3>Your Orders</h3>
        <div className={styles.Profileorder}> 
       
        <div> id_order:{state.id_order}</div>
        <div> id_customer: {state.id_customer}</div>
        <div> id_restaurant: {state.id_restaurant}</div>
        <div> price: {state.price}</div>
        <div> time: {state.time}</div>
        <div> date: {state.date}</div>
        <div>
        <div> status: <div  id={"status"}>{state.status} </div></div>
    <input type="text" name="status" value={state.status} onChange={changeHandler} />
        </div>
        <div> content: {state.content}</div>
        <div> paid: {state.paid}</div>
        
        <button type="submit" onClick={submitHandler}>Submit</button>
          </div>
    </div>
  );
}

export default App;
