import { IMG_CDN_LINK } from "../constants";

// ?. -> Optional Chaining
// Destructuring the data helps to get rid of same properties again and again like restaurant is common.
const RestaurantCard = ({ 
    cloudinaryImageId, 
    name, 
    cuisines, 
    avgRating 
  }) => {
    return (
      <div className="card w-56 bg-pink-50 p-2 m-2 shadow-lg">
        <img src={IMG_CDN_LINK+cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h4 className="font-bold">{avgRating} Stars</h4>
      </div>
    );
};

export default RestaurantCard;