import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log("Body Rendered",searchText);
    useEffect(() => {
        // API call
        // fetch("https://example.com/api/restaurants")
        //   .then((response) => response.json())
        //   .then((data) => setListOfRestaurants(data));
        // Simulating API call with mock data
        getRestaurants()      
    },[]);
    
    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        console.log(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestaurants(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants || []);
        // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    if(!listOfRestaurants.length) return <Shimmer />;
    
    return (
        <div className="body">
        <div className="filter">
        <div className="search-container">
            <input  type="text" className="search-box" value={searchText} onChange={(event)=>{
                if(event && event.target && !event.target.value) {
                    console.log(event.target.value);
                    setFilteredRestaurants(listOfRestaurants);
                    setSearchText("");
                    return;
                }
                setSearchText(event.target.value);
            }}/>
            <button onClick={()=>{
                const filteredList = listOfRestaurants.filter((restaurant) =>
                    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredList);
            }}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
        })}
        </div>
        </div>
        
    );
};



export default Body;