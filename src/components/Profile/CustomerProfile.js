import styles from './Profile.module.css'
import profiledata from '../Data/ProfileData';
import Restaurantdata from '../Data/ProfileRestData';
import { Link } from "react-router-dom";



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

function App() {
    //to this const customer id you want to search
  const CustomerNUM= 1;
  return (
    <div className={styles.Profiletext}>
      {profiledata.filter(profile => profile.id_customer === CustomerNUM).map(filteredPerson => (
        <><h3>PRofile Info</h3>
        <div> 
        Name: {filteredPerson.firstname}
              {filteredPerson.lastname}

          </div>
          <div>Money: {filteredPerson.money}</div>
          
          
          </>
        
        
      ))}
      
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
      
      <h3>
      <Link to="/profile/orders/:id">Your Orders</Link>
      </h3>
    
    </div>
  );
}

export default App;
