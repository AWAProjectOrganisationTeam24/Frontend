import styles from './Profile.module.css'
import Orderdata from '../Data/ProfileOrderData';


function App() {
    //to this const customer id you want to search
  const OrdersCustomerNUM= 2;

  return (
    <div className={styles.Profiletext}>
      
      <h3>Your Orders</h3>
      {Orderdata.filter(Order => Order.id_customer == OrdersCustomerNUM && Order.status == "ready").map(filteredOrder => (
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
