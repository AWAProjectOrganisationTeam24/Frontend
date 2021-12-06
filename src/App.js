
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RestaurantProfile from "./components/Profile/RestaurantProfile";
import CustomerProfile from "./components/Profile/CustomerProfile";
import Profileorders from "./components/Profile/Orders";
import Menu from "./components/Menu"
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import RestaurantMaker from "./pageMakers/RestaurantMaker";
import ProductMaker from "./pageMakers/ProductMaker";
import Home from "./components/Home";


import ShoppingCart from "./components/Shoppingcart";


class App extends React.Component {
  render() {
    return (
      <Router>


        <Routes>
        <Route path="/profile/orders/:id" element={<Profileorders/>}/>
        <Route path="/profile/restaurant/:id_restaurant" element={<RestaurantProfile/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>} />

          <Route path="/profile/:id" element={<CustomerProfile/> } />
          <Route path="/login/createUser" element={<CreateUser/> } />
        
          <Route path="/restaurant/menu/:id/" element={<Menu/>}/>
          <Route path="/restaurantMaker" element={<RestaurantMaker/> } />
          <Route path="/productMaker" element={<ProductMaker/> } />

          <Route path="/cart" element={<ShoppingCart/>} />

        </Routes>

       </Router>
    );
  }
}

export default App;
