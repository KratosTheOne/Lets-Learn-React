import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";

const Body = () => {
  //useState returns an array = [variable name, set function to update the variable]
  const [searchText, setSearchText] = useState(""); //To create state variables
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  //console.log("render");

  const isOnline = useOnline();

  if(!isOnline) {
      return <h1>You are offline!</h1>
  }

  // Conditional Rendering
  // If data is there show data else Shimmer UI.

  // Early return
  if(!allRestaurants) return null;

  //if(filteredRestaurants.length === 0) return <h1>No Matches Found!</h1>

  return (allRestaurants.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container bg-pink-50 p-5 my-5 items-center">
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
          className="search-btn bg-purple-500 m-2 text-white rounded-lg px-2 hover:bg-purple-700"
          onClick={() => {
            //need to filter the data
            //change state of restaurants variable
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
          >Search</button>
      </div>
      <div className="restaurant-list flex flex-wrap px-8">
        {
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id} key = {restaurant.data.id} >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        }
      </div>
    </>
  );
};

export default Body;