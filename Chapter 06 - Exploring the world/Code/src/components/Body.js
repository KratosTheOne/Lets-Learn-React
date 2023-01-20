import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  //useState returns an array = [variable name, set function to update the variable]
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //To create state variables

  useEffect(() => {
    getRestaurants();
  }, [])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.450464&lng=77.315363&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  // Conditional Rendering
  // If data is there show data else Shimmer UI.

  // Early return
  if(!allRestaurants) return null;

  if(filteredRestaurants.length === 0) return <h1>No Matches Found!</h1>

  return (allRestaurants.length === 0) ? <Shimmer /> : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
          >Search</button>
      </div>
      <div className="restaurant-list">
        {
          filteredRestaurants.map((restaurant) => {
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