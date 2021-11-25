
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Menu from "./components/Menu"
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import RestaurantMaker from "./components/RestaurantMaker";
import ProductMaker from "./components/ProductMaker";
import Home from "./components/Home";


class App extends React.Component {
  render() {
    return (
      <Router>


        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/login/createUser" element={<CreateUser/> } />
          <Route exact path="/restaurant/menu/id/" element={<Menu/>}/>
          <Route exact path="/restaurantMaker" element={<RestaurantMaker/>} />
          <Route exact path="/productMaker" element={<ProductMaker/> } />
        </Routes>

       </Router>
    );
  }
}

export default App;