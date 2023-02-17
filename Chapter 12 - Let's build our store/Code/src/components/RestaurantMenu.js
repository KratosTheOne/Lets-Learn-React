import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { IMG_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant"
import { addItems, removeItem, clearCart } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {

    //How to read a dynamic URL params 
    const params = useParams();
    const { id } = params;

    const restaurants = useRestaurant(id);
    
    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItems(item)); // {payload : "grapes"}
    }

    return !restaurants ? (
        <Shimmer />
    ) : ( 
        <div className="menu flex p-5 m-5">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2 className="font-bold text-lg">{restaurants.name}</h2>
                <img src={IMG_CDN_LINK + restaurants.cloudinaryImageId} />
                <h3>{restaurants.area}</h3>
                <h3>{restaurants.city}</h3>
                <h3>{restaurants.costForTwoMsg}</h3>
                <h3>{restaurants.cuisines.join(", ")}</h3>
                <h3 className="font-bold">{restaurants.avgRatingString} Stars</h3>
            </div>
            <div className="mx-10">
                <h2 className="font-bold text-lg">Menu</h2>
                <ul>
                    {Object.values(restaurants?.menu?.items).map((item) => (
                        <li key={item.id}>
                            {item.name} - {" "}
                            <button 
                                onClick={() => handleAddItems(item)} 
                                className="p-1 m-2 bg-green-100 rounded-lg"
                            >
                                Add
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;