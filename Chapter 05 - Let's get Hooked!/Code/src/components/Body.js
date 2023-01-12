import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  //useState returns an array = [variable name, set function to update the variable]
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState(""); //To create state variables

  return (
    <>
      <div className="search-container">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); //e.target.value => whatever u put in input;
          }}
        />
        <button 
          className="search-btn"
          onClick={() => {
            //need to filter the data
            //change state of restaurants variable
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
          >Search</button>
      </div>
      <div className="restaurant-list">
        {
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key = {restaurant.data.id} />
            );
          })
        }
      </div>
    </>
  );
};

export default Body;