import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  if(!resInfo) return <Shimmer />  ;
  
  const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo.cards[2].card.card.info || {}; 

  const Categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card.card["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  console.log("Categories",Categories); 
  
  return (
    <div className="menu">
    <h1>{name}</h1>
    <h2>{cuisines.join(', ')} - {costForTwoMessage}</h2>
    
    {/* Categories */}
    <div className="menu-list">
      {Categories.map((category) => {
        return <RestaurantCategory key={category.card.card.title} {...category.card.card} />;
      })} 
    </div>
    </div>
  );
}

export default RestaurantMenu;