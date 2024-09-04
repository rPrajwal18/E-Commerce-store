
import { useState } from 'react';
import { useAddProduct } from '../store/useAddProduct';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "",
        price: "",
        image: ""
    });

    const { createProduct } = useAddProduct();

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const { success, message } = await createProduct(newProduct); 
            console.log(newProduct);
            console.log("Message:", message);
            console.log("Success:", success); 
            if(success) {
                setNewProduct({ name: "", category: "", price: "", image: "" }); // Reset form 
            }
        } catch (error) {
            console.error("Error creating product:", error);
        }
    }

    return (
        <div className="flex font-poppins mt-3 flex-col items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-[450px] bg-[#11243E] rounded-lg shadow-md">
                <form onSubmit={handleAddProduct} className="shadow-lg rounded-lg px-5 py-6 ">
                    <div className="mb-3">
                        <label htmlFor='name' className="block text-white text-md font-medium mb-1.5">Product Name</label>
                        <input
                            id='name'
                            name="name"
                            type="text"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-md bg-[#0B1D2F] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='category' className="block text-white text-md font-medium mb-1.5">Category</label>
                        <input
                            name="category"
                            id='category'
                            type="text"
                            value={newProduct.category}
                            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                            className="w-full px-4 py-3 rounded-md bg-[#0B1D2F] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='price' className="block text-white text-md font-medium mb-1.5">Price</label>
                        <input
                            name="price"
                            id='price'
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            className="w-full px-4 py-3 rounded-md bg-[#0B1D2F] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='image' className="block text-white text-md font-medium mb-1.5">Image URL</label>
                        <input
                            name="image"
                            id='image'
                            type="text"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            className="w-full px-4 py-3 rounded-md bg-[#0B1D2F] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-green-500 rounded-md text-white font-medium hover:bg-green-700 transition duration-300"
                    >
                        Add Product
                    </button>

                </form>
            </div>
        </div>

    );
}

export default CreatePage;
