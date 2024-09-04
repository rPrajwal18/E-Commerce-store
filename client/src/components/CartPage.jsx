import { useContext } from "react";
import { CartContext } from "./CartContext";
import trashIcon from "../images/delete.png";

const Cart = () => {
    const { cart, clearCart, removeFromCart, orderItem } = useContext(CartContext);

    return (
        <div className="p-6 max-w-4xl font-poppins mx-auto rounded-lg ">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-extrabold text-white">Your Cart</h2>
                    <button
                        onClick={clearCart}
                        className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
                    >
                        Clear Cart
                    </button>
                </div>
                <hr className="my-4 border-gray-300" />

                {cart.length === 0 ? (
                    <p className="text-center text-white text-lg mt-12">Your cart is empty.</p>
                ) : (
                    cart.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 mb-4">
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold text-gray-200">{product.name}</span>
                            <span className="text-gray-200">₹{product.price}</span>
                        </div>
                        
                        <div className="flex space-x-4">
                            <button
                                onClick={() => orderItem(product._id)}
                                className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-md transition duration-300"
                            >
                                Order
                            </button>
                            <button
                                onClick={() => removeFromCart(product._id)}
                                className="p-2 bg-white hover:bg-red-500 text-white rounded-full shadow-md transition duration-300"
                            >
                                <img src={trashIcon} alt="Remove" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;
