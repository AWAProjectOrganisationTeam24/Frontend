import styles from './Profile.module.css'
import profiledata from '../Data/ProfileData';
import Restaurantdata from '../Data/ProfileRestData';
import Orderdata from '../Data/ProfileOrderData';
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router";



/*function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { id_restaurant } = useParams();
  
    return (
      <div>
        <h3>{id_restaurant}</h3>
      </div>
    );
  }*/

function App(props) {
    //to this const customer id you want to search
  const CustomerNUM= 1;
  const items = useLocation();
  const {cartItems, itemsPrice} = items.state;

  


  return (
    <div className={styles.Profiletext}>
      {profiledata.filter(profile => profile.id_customer == CustomerNUM).map(filteredPerson => (
        <><h3>PRofile Info</h3>
        <div> 
        Name: {filteredPerson.firstname}
              {filteredPerson.lastname}
              </div>  
              <div>Address: {filteredPerson.address}</div>
          <div>Money: €{filteredPerson.money - itemsPrice}</div>
          </>
        
        
      ))}
      
      <h3>Your Restaurants</h3>
      <Link to="/restaurantMaker">New Restaurant</Link>
      {Restaurantdata.filter(Restaurant => Restaurant.id_customer == CustomerNUM).map(filteredRestaurant => (
        <>
        <div> 
        RestarauntName: {filteredRestaurant.restaurantsName}
             

          </div>
          City: {filteredRestaurant.location}
          <div>Address: {filteredRestaurant.address}</div>
          <div></div>
          <topic></topic>
          <Link to="/Profile/Restaurant/:id_restaurant">{filteredRestaurant.id_restaurant}</Link>
          
          </>
        
        
      ))}
      
      <h3>Your Orders</h3>
      {Orderdata.filter(Order => Order.id_customer == CustomerNUM && Order.status == "ready").map(filteredOrder => (
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
      <h3>Active orders: </h3>
          <div>
          {cartItems.map(e => 
          <div key={e.id}>
          <div>Name: {e.foodName}</div>
          <div>Amount: {e.qty}x
          {e.foodprize}€</div> 
      </div>
      )}
      <div>Price: {itemsPrice}€ </div>
       </div>
    </div>
  );
}

export default App;
