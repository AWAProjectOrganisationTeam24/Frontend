import React, { useEffect, useState } from "react";
import Header from "./partials/Header";
import "../App.css";
import ProductCard from "./partials/RestaurantCard";
import Search from "./Search";
//import { data } from "./Data/Data";
import FoodNotFound from "./FoodNotFound";
import axios from "axios";


function Home() {

  const [items, setItems] = useState('');
  const [search, setSearch] = React.useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    // call the data from api
    const getRestaurants = () => {
        axios.get(`http://localhost:5000/`)
            .then(res => {
                const data = res.data;
                setItems(data);
            })
            .catch(err => console.log('error'));
    }

  const filterList = () => {
    if (search === "") {
      return items;
    }else {
        return items.filter(
            (item) => item.city.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
    }
  };

  return (
    <div className="main">
      {/* header */}
      <Header />

      <Search
        searchParam={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search restaurant by city.."
      />

      {/*  */}

  

      <div class="rowbox ">
        {filterList().length > 0 ? (
          <>
            {filterList().map((item) => (
              <div class="column ">
                <ProductCard
                  restaurantsName={item.name}
                  location={item.city}
                  address={item.address}
                  status={item.openHr}
                  id={item.id_restaurant}
                />
              </div>
            ))}
          </>
        ) : (
          <div class="column">
            <FoodNotFound />
          </div>
        )}
      </div>

    </div>
  );
}

export default Home;
