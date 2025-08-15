import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import ItemList from './ItemList';
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart Items:", cartItems);
  
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
          <div className='w-6/12 mx-auto'>
            <button 
                className='bg-red-100 text-red-800 border border-red-200 rounded-lg px-2 py-1 text-xs cursor-pointer hover:bg-red-200 hover:text-red-900'
                onClick={()=>handleClearCart()}
                >
                Clear cart
            </button>
            <ItemList items={cartItems} />             
          </div>    
      )}
    </div>
  );
}

export default Cart;