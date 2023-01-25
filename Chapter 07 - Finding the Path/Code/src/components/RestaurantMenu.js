import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { IMG_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    //How to read a dynamic URL params 
    const params = useParams();
    const { id } = params;

    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.450464&lng=77.315363&menuId=" + id);
        const json = await data.json();
        console.log(json.data);
        setRestaurants(json?.data);
    }

    return !restaurants ? (
        <Shimmer />
    ) : ( 
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurants.name}</h2>
                <img src={IMG_CDN_LINK + restaurants.cloudinaryImageId} />
                <h3>{restaurants.area}</h3>
                <h3>{restaurants.city}</h3>
                <h3>{restaurants.costForTwoMsg}</h3>
                <h3>{restaurants.cuisines}</h3>
                <h3>{restaurants.avgRatingString} Stars</h3>
            </div>
            <div>
                <h2>Menu</h2>
                <ul>
                    {Object.values(restaurants?.menu?.items).map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;