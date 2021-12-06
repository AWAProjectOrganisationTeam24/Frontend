import styles from './Profile.module.css'
import Restaurantdata from '../Data/ProfileRestData';
import Orderdata from '../Data/ProfileOrderData';
import { Link } from "react-router-dom";

function App() {
    //to this const customer id you want to search
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
          <Link to="/restaurantMaker">New Restaurant</Link>
          
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
        <div> status: {filteredOrder.status}</div>
        <div> content: {filteredOrder.content}</div>
        <div> paid: {filteredOrder.paid}</div>
        

          </div>
      
          
          
          
          </>
        
        
      ))}
    </div>
  );
}

export default App;
