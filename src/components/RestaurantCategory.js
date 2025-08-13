import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({category, showItems, setShowIndex}) => {
    return (
        <div className="restaurant-category">
            <div className="mx-auto mb-[10px] bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={() => setShowIndex()}>
                    <span className="font-bold text-lg">{category.title} ({category.itemCards.length})</span>
                    {showItems?<span>↑</span>:<span>↓</span> }
                </div>
                {showItems ? <ItemList items={category.itemCards} />:""}
                {/* */}
            </div>
            {/* Accordion body */}
        </div>
    );
}

export default RestaurantCategory;