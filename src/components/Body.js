import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (restaurant) => restaurant.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-list">
            {listOfRestaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
            })}
            </div>
        </div>
        
    );
};



export default Body;