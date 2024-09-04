import { create } from 'zustand';
import axios from 'axios';
import { baseURL } from './Urls';

export const useAddProduct = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async (productData) => {
        try {
            const response = await axios.post(`${baseURL}/api/products`, productData);
            const data = response.data;
            set((state) => ({ products: [...state.products, data.data] }));
            return { message: "Product created successfully", success: true };
        } catch (error) {
            console.error("Error in creating product", error);
            return { message: "Error in creating product", success: false };
        }
    },

    getAllProducts: async () => {
        try {
            const response = await axios.get(`${baseURL}/api/products`);
            const data = response.data; 
            set({ products: data.data });
            return { message: "Data fetching complete", success: true };
        } catch (error) {
            console.error("Error in fetching product data", error);
            return { message: "cannot fetch the data", success: false };
        }
    },

    deleteProduct: async (pid) => {
        try{
            const response = await axios.delete(`${baseURL}/api/products/${pid}`);
            const data = await response.data;
            if(!data.success) return {success: false, message: data.message};
            set(state => ({products: state.products.filter(product => product._id !== pid)}));
            return { message: "Product deletion complete", success: true };
        } catch(error){
            console.error("Error in fetching product data", error);
            return { message: "cannot fetch the data", success: false };
        }
    },

    updateProduct: async (pid, updatedProduct) => {
        try{
            const response = await axios.put(`${baseURL}/api/products/${pid}`, updatedProduct);
            const data = await response.data;
            if(!data.success) return {success: false, message: data.message};
            set(state => ({
                products: state.products.map(product => product._id === pid ? data.data : product)
            }));
        } catch(error){
            console.error("Error in updating the product data", error);
            return { message: "cannot update the data", success: false };
        }
    }

}));
