import { useSelector } from "react-redux";
import FoodMenu from "./FoodMenu";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            <button className="bg-purple-100 p-2 m-5" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="flex">
                {cartItems.map((item) => 
                    <FoodMenu key={item.id} {...item} />)}
            </div>
        </div>
    );
};

export default Cart;