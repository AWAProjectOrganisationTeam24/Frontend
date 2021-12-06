
import React from 'react'
import Header from './partials/Header'
import "../App.css"
import ProductCard from './MenuFood'
import Search from './Search'
import {data} from "./Data/MenuData"
import FoodNotFound from './FoodNotFound'
import Footer from './partials/Footer'
import Basket from './Shoppingcart';
import { useState } from 'react';



function Home() {
  // console.log(data)
  const [search, setSearch] = React.useState("");

  const { products } = data;
  // console.log("products")
  // console.log(products)
  const [cartItems, setCartItems] = useState([]);
  //console.log("cartItemcheck")
  //console.log(cartItems)

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // call the data from api

  const filterList = () => {
    if (search === "") {
      // console.log("Filternone")
      //console.log(products)
      return products;
    }
    //console.log("Filtersomething")
    //console.log(products)
    return products.filter(
      (item) => item.foodName.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  };

  return (
    <div className="main">
      {/* header */}

      <div>
        <Header countCartItems={cartItems.length}></Header>
        <div></div>
      </div>

      <Search
        searchParam={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Your Meal here.."
      />

        <div> <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /></div>
      <div class="row">
     
        {filterList().length > 0 ? (
          <>
            {filterList().map((product) => (
              <div class="column">
                <ProductCard product={product} onAdd={onAdd} />
              </div>
            ))}
          </>
        ) : (
          <div class="column">
            <FoodNotFound />
          </div>
        )}
      </div>


      <Footer />
    </div>
  );
}

export default Home;
