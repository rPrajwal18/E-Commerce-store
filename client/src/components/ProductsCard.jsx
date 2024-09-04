/* eslint-disable react/prop-types */
import icon1 from '../images/edit.png';
import icon2 from '../images/delete.png';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useAddProduct } from '../store/useAddProduct';

function ProductsCard({ product }) {
    
    const {addToCart} = useContext(CartContext);
    const { deleteProduct } = useAddProduct();

    const handleDeleteProduct = (pid) => {
        try {
            const { message, success } = deleteProduct(pid);
            console.log('Message', message);
            console.log('Success', success);
        } catch (error) {
            console.log("Error deleting product", error);
        }
    }

    return (
        <div className="w-[320px] h-[305px] m-4 font-poppins flex flex-col gap-2 relative p-3 border border-black/10 rounded-[8px] bg-gray-800 bg-opacity-80 shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="mt-1 h-32">
                <img src={product.image || 'https://via.placeholder.com/200x130'}  alt={product.name} className="h-[130px] w-[200px] rounded-[10px] object-cover" />
            </div>
            <div className="text-center pb-1">
                <h4 className="text-[17px] my-0.5 text-white font-bold">{product.name}</h4>
                <p className="text-[16px] my-0.5 text-gray-300">{product.category}</p>
                <p className="text-[16px] my-0.5 text-gray-300">₹{product.price}</p>
                <div className="flex justify-center mt-3 mb-2 space-x-4">
                    <button  className="p-2 bg-blue-400 hover:bg-blue-700 text-white rounded-md">
                        <img src={icon1} alt="Edit" className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDeleteProduct(product._id)} className="p-2 bg-red-400 hover:bg-red-700 text-white rounded-md">
                        <img src={icon2} alt="Delete" className="w-4 " />
                    </button>
                    <button onClick={() => addToCart(product)} className="px-2 bg-yellow-300 hover:bg-yellow-500 text-black rounded-md">
                        Add to cart
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default ProductsCard;