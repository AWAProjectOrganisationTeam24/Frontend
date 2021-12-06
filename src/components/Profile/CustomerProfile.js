import styles from './Profile.module.css'
import profiledata from '../Data/ProfileData';
import Restaurantdata from '../Data/ProfileRestData';
import Orderdata from '../Data/ProfileOrderData';
import { Link } from "react-router-dom";






function App() {
    //to this const customer id you want to search

   
  
    
  const CustomerNUM= 1;
  return (


    <div >

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
          {profiledata.filter(profile => profile.id_customer === CustomerNUM).map(filteredPerson => (
        <>
        <h3>PRofile Info</h3>
        <div> 
        <h1>Name: {filteredPerson.firstname}</h1>
              {filteredPerson.lastname}

          </div>
          <div>Money: {filteredPerson.money}</div>
          
          
          </>
        
        
      ))}

          </div>
          <div className="col-md-4">
          <h3>Your Restaurants</h3>
      <Link to="/restaurantMaker">New Restaurant</Link>
      {Restaurantdata.filter(Restaurant => Restaurant.id_customer === CustomerNUM).map(filteredRestaurant => (
        <>
        <div> 
          Restaurantname: 
        <Link to="/Profile/Restaurant/:id_restaurant">{filteredRestaurant.restaurantsName}</Link>
             

          </div>
          City: {filteredRestaurant.location}
          <div>Address: {filteredRestaurant.address}</div>
          <div></div>
          <topic></topic>
         
          
          </>
        
        
      ))}
            
          </div>
          <div className="col-md-4">
          <h3>Your Orders</h3>
      {Orderdata.filter(Order=>Order.id_order).map(filteredOrder => (
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
        </div>
      </div>
      {/* end */}
      
      
      
      

      
      
    

    </div>
  );
}

export default App;
