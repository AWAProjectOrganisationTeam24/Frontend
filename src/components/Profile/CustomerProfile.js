import styles from './Profile.module.css'
import { Link } from "react-router-dom";
import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import { UserAuthContext } from '../Contexts'
import Constants from '../Constants.json'
import Header from "../Header";


export default function App() {
    const UserAuthContextValue = useContext(UserAuthContext);

    //to this const customer id you want to search
    const id_customer = useParams();
    const [state, setState] = React.useState('');

    useEffect(() => {
     axios.get(Constants.API_ADDRESS + `/customer/view-customer/${id_customer.id}`, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + UserAuthContextValue.jwt
          }
      })
         .then(res => {
         const data = res.data;
         setState(data[0]);
     })
         .catch(err => console.log('error'));
    }, [id_customer.id]);


  return (
    <div className={styles.Profiletext}>
        <Header />
        <h3>Profile Info</h3>
        <div> 
        Name:
            <br/>
            {state.firstname}
            <br/>
            {state.lastname}

          </div>
          <div>Mail: {state.mail}</div>
          <div>Money: {state.money}</div>
          <div>Address: {state.address}</div>
          <div>City: {state.city}</div>
      <hr/>

      <Link to={`/restaurantMaker/${id_customer.id}/${state.id_manager}`}><h3>New Restaurant</h3></Link>
        <div>
        <Link to={`/profile/restaurant/${id_customer.id}/${state.id_manager}`}><h3>Your Restaurants</h3></Link>
          </div>

      <h3>
      <Link to={`/profile/orders/${state.id_customer}`}>Your Orders</Link>
      </h3>
    </div>
  );
}

