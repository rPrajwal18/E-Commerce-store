import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAddProduct } from "../store/useAddProduct";
import ProductsCard from '../components/ProductsCard';

const HomePage = () => {

    const { getAllProducts, products } = useAddProduct();

    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);

    console.log("Products:", products);

    return (
        <div className="bg-primary font-poppins min-h-screen p-4 md:p-6">
            <div className="text-center mb-4">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">New kind of business.</h3>
                <h4 className="text-lg md:text-2xl font-normal text-gray-300">
                    Create your Product and order it.
                </h4>
            </div>
            <div className="mb-4">
                <h3 className="text-xl md:text-2xl mt-5 font-semibold text-center text-gray-300">Current Products 🚀</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductsCard key={product._id} product={product} />
                    ))
                ) : (
                    <div className="w-full text-center">
                        <h4 className="text-sm md:text-md text-white">No products found 🥲</h4>
                        <Link to="/create">
                            <span className="text-base md:text-lg text-blue-500 underline">Create a product</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;
