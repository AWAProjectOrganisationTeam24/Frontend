import styles from './Profile.module.css'
import Restaurantdata from '../Data/ProfileRestData';
import Orderdata from '../Data/ProfileOrderData';
import { Link } from "react-router-dom";
import react from 'react';
import axios from "axios";


class App extends react.Component {
  constructor(props) { 
    super(props);   
    this.state = {      
      id_order:'',
      id_customer: '',
      id_restaurant: '',
      price: '',
      time: '',
      date: '',
      status:'',
      content:'' ,
      paid: '' 
    };  
}    

  changeHandler = e => {
    this.setState({
        status: e.target.value[10]
    })
}

submitHandler = e => {
  e.preventDefault();

  //send it to backend + ensure if goes bad
  //get response from backend - after login show homepage
  axios.post("http://localhost:5000/", {
    id_order: this.state.id_order,
    id_customer: this.state.id_customer,
    id_restaurant: this.state.id_restaurant,
    price: this.state.price,
    time: this.state.time,
    date: this.state.date,
    status: this.state.status,
    content: this.state.content,
    paid: this.state.paid
  })
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.log(err)
      })
}



  changeValue(value) {
    
    console.log(value);
    document.getElementById('status').innerHTML=value;
    console.log(value);
  }


    
    
  

render(){
  const{
    status
   }=this.state
  const RestaurantNUM= 1;



  return (
    <div className={styles.Profiletext}>
      {Restaurantdata.filter(Restaurant => Restaurant.id_restaurant === RestaurantNUM).map(filteredRestaurant => (
        <>
        <div> 
        RestarauntName: {filteredRestaurant.restaurantsName}
             

          </div>
          City: {filteredRestaurant.location}
          <div>Address: {filteredRestaurant.address}</div>
          <div></div>
          <Link to="/ProductMaker">New Menu Item</Link>
          
          </>
    
        
      ))}
      
      <h3>Your Orders</h3>
      {Orderdata.filter(Order => Order.id_restaurant === RestaurantNUM).map(filteredOrder => (
        <>
        <div className={styles.Profileorder}> 
       
        <div> id_order:{filteredOrder.id_order}</div>
        <div> id_customer: {filteredOrder.id_customer}</div>
        <div> id_restaurant: {filteredOrder.id_restaurant}</div>
        <div> price: {filteredOrder.price}</div>
        <div> time: {filteredOrder.time}</div>
        <div> date: {filteredOrder.date}</div>
        <div>
        <div> status: <div  id={"status"}>{filteredOrder.status} </div></div>
    <input type="text" name="status" value={status} onChange={this.changeHandler} />
        </div>
        <div> content: {filteredOrder.content}</div>
        <div> paid: {filteredOrder.paid}</div>
        
        <button type="submit">Submit</button>
        
          </div>
         
          
          
          
          </>
        
        
      ))}
    </div>
  );
}}

export default App;
