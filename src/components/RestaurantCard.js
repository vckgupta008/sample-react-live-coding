import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
}) => {
  return (
    <div className="card">
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;