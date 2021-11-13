import React from 'react';
import './App.css';
import Header from './components/Header';
import RestauranMaker from './components/RestaurantMaker';
import ProductMaker from './components/ProductMaker';


class App extends React.Component {
  render(){
  return (
    <><div className='App'>
      <Header />
    </div>
        <RestauranMaker/>
        <ProductMaker/>
      </>
  );
}}


export default App;
