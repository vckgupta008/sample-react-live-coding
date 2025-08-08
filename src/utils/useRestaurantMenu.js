import React, {useState, useEffect} from "react";

const useRestaurantMenu = (restaurantId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        // Simulating API call
        console.log("useRestaurantMenu Hook Rendered");
        fetchRestaurantMenu();
    }, [restaurantId]);

    const fetchRestaurantMenu = async () => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;