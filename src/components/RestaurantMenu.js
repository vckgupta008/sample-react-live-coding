import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
   useEffect(() => {
        // Simulating API call
        console.log("RestaurantMenu Component Rendered");
        fetchRestaurantMenu();
    }, []);
    const fetchRestaurantMenu = async () => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data.cards[2].card.card.info);
        // Process the menu data as needed
    };
  
   const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo || {}; 

  if(!resInfo) return <Shimmer />  ;
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