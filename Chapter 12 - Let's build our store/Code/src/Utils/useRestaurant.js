import { FETCH_MENU_URL } from "../constants";
import { useEffect, useState } from "react";

const useRestaurant = (id) => {

    const [restaurants, setRestaurants] = useState(null);

    // make API call
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data.json();
        //console.log(json.data);
        setRestaurants(json?.data);
    }

    // return restaurants
    return restaurants;
};

export default useRestaurant;