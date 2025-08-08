import { CDN_URL } from "../utils/constants";


const ItemList = ({ items }) => {
    console.log("ItemList Rendered", items);
    return <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border border-gray-200 border-b-2 ">
            <img className="w-20 h-20" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
            <div className="py-2">
                <span>{item.card.info.name}</span>
            </div>
            <p className="text-xs">
                {item.card.info.description}
            </p>
            
            </div>
        ))}
    </div>
};

export default ItemList;