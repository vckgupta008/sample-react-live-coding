import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";


const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };


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
            <button 
                className="bg-green-100 text-green-800 border border-green-200 rounded-lg px-2 py-1 text-xs cursor-pointer hover:bg-green-200 hover:text-green-900"
                onClick={()=>handleAddItem(item.card.info.name)}
                >
                Add +
            </button>
            
            </div>
        ))}
    </div>
};

export default ItemList;