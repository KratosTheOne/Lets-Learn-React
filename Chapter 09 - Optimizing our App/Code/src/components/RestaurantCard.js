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
      <div className="card">
        <img src={IMG_CDN_LINK+cloudinaryImageId} />
        <h2>{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{avgRating} Stars</h4>
      </div>
    );
};

export default RestaurantCard;