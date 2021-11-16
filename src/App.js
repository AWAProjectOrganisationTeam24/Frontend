import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import RestaurantMaker from './components/RestaurantMaker';
import ProductMaker from './components/ProductMaker';


class App extends React.Component {

  render(){

  return (
    <BrowserRouter>
      <div>
        <div className= 'header'>
        <Link to= '/'><div>Foodcrosoft</div></Link>
      </div>
      <Routes>
          <Route>
            <Route path="/" element={ <Header/> } />
            <Route path="/login" element={ <Login/> }/>
            <Route path="/login/createUser" element={ <CreateUser/> }/>
          </Route>
          <Route>
            <Route path='/restaurantMaker' element={ <RestaurantMaker/> }/>
            <Route path='/productMaker' element={ <ProductMaker/> }/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
      
  );
}}


export default App;
