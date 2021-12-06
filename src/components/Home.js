import React from "react";
import Header from "./partials/Header";
import "../App.css";
import ProductCard from "./partials/RestaurantCard";
import Search from "./Search";
import { data } from "./Data/Data";
import FoodNotFound from "./FoodNotFound";


function Home() {
  // call the data from api
  const [items] = React.useState(data);
  const [search, setSearch] = React.useState("");

  const filterList = () => {
    if (search === "") {
      return items;
    }
    return items.filter(
      (item) => item.location.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
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
                  restaurantsName={item.restaurantsName}
                  location={item.location}
                  address={item.address}
                  status={item.status}
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
