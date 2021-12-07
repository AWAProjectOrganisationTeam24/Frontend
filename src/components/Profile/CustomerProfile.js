import styles from './Profile.module.css'
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import {useParams} from "react-router";
import axios from "axios";


function App() {
    //to this const customer id you want to search
    const id_customer = useParams();

    const [state, setState] = React.useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/customer/view-customer/${id_customer.id}`)
        .then(res => {
          const data = res.data;
          setState(data[0]);
        })
        .catch(err => console.log('error'));
  }, [id_customer.id]);


  return (
    <div className={styles.Profiletext}>
        <h3>Profile Info</h3>
        <div> 
        Name:
            <br/>
            {state.firstname}
            <br/>
            {state.lastname}

          </div>
          <div>Money: {state.money}</div>
      
      <h3>Your Restaurants</h3>
      <Link to="/restaurantMaker">New Restaurant</Link>
        <div> 
          Restaurantname: 
        <Link to={`/profile/restaurant/${state.id_restaurant}`}>{state.name}</Link>
          </div>

      <h3>
      <Link to={`/profile/orders/${state.id_restaurant}`}>Your Orders</Link>
      </h3>
    </div>
  );
}

export default App;
