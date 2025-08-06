import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  if(!resInfo) return <Shimmer />  ;
  
  const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo || {}; 
  
  return (
    <div className="menu">
    <h1>{name}</h1>
    <h2>{cuisines.join(', ')} - {costForTwoMessage}</h2>
    
    <h2>Menu</h2>
    <ul>
    <li>Pizza</li>
    <li>Burger</li>
    <li>Pasta</li>
    <li>Salad</li>     
    </ul>
    </div>
  );
}

export default RestaurantMenu;