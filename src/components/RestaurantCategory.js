import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (category) => {
    const [showItems, setShowItems] = useState(false);

    return (
        <div className="restaurant-category">
            <div className="mx-auto mb-[10px] bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={() => setShowItems(!showItems)}>
                    <span className="font-bold text-lg">{category.title} ({category.itemCards.length})</span>
                    <span>↓</span>
                </div>
                {showItems ? <ItemList items={category.itemCards} />:""}
                {/* <span>↑</span> */}
            </div>
            {/* Accordion body */}
        </div>
    );
}

export default RestaurantCategory;