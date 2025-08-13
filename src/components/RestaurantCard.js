import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
}) => {
  const {user} = useContext(UserContext);
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
      <h4>{user.name}</h4>
    </div>
  );
};

const usePromotedRestaurantCard = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="promoted-card">
        <label className="absolute bg-black text-white rounded-lg m-2 p=2">Promoted</label>
        <WrappedComponent {...props} />
        
      </div>
    );
  };
}

export const PromotedRestaurantCard = usePromotedRestaurantCard(RestaurantCard);


export default RestaurantCard;