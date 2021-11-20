
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Menu from "./components/Menu"
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import RestaurantMaker from "./components/RestaurantMaker";
import ProductMaker from "./components/ProductMaker";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";

class App extends React.Component {
  render() {
    return (
      <Router>


        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>} />
          <Route path="/login/createUser" element={<CreateUser/> } />
          <Route path="/restaurant/id/" element={<Restaurant/>}/>
          <Route path="/restaurant/menu/id/" element={<Menu/>}/>
          <Route path="/restaurantMaker" element={RestaurantMaker } />
          <Route path="/productMaker" element={ProductMaker } />
        </Routes>

       </Router>
    );
  }
}

export default App;