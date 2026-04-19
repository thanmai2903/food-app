import React from "react";
import { useCart } from "../context/CartContext";

const Orders = () => {
  const { orders } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl font-bold mb-6">
          📦 Your Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-500">
              No orders yet 😢
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-4 rounded-xl shadow-md"
              >
                {/* ORDER HEADER */}
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">
                    Order ID: #{order.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.time}
                  </p>
                </div>

                {/* ITEMS */}
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm py-1"
                  >
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>
                      ₹{item.price * item.qty}
                    </span>
                  </div>
                ))}

                {/* TOTAL */}
                <div className="flex justify-between mt-3 font-bold">
                  <span>Total</span>
                  <span className="text-green-600">
                    ₹{order.total}
                  </span>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;