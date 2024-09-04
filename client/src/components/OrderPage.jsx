
import { useContext } from "react";
import { CartContext } from "./CartContext";

const OrderPage = () => {
    const { orders } = useContext(CartContext);

    return (
        <div className="p-6 max-w-4xl mx-auto rounded-lg">
            <h2 className="text-3xl font-extrabold text-gray-200 text-center mb-6">Your Orders</h2>
            <hr className="my-4 border-gray-300" />

            {orders.length === 0 ? (
                <p className="text-center text-gray-500 text-lg mt-20">No orders have been placed yet.</p>
            ) : (
                orders.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 mb-4">
                      <div className="flex flex-col">
                          <span className="text-lg font-semibold text-white">{product.name}</span>
                          <span className="text-white">₹{product.price}</span>
                      </div>
                      <div className="text-right">
                          <span className="text-white">Your order has been placed.</span>
                      </div>
                  </div>
              
                ))
            )}
        </div>
    );
};

export default OrderPage;
