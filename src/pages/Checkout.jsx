import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, total, placeOrder } = useCart();
  const navigate = useNavigate();

  const [showPayment, setShowPayment] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setShowPayment(true);
  };

  const confirmPayment = (method) => {
    if (loading) return; // 🔥 prevent double click

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowPayment(false); // ✅ close modal
      placeOrder();
      navigate("/tracking");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          🧾 Checkout
        </h1>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            Order Summary
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">
              Your cart is empty 😢
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-3"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>

                <p className="font-semibold">
                  ₹{item.price * item.qty}
                </p>
              </div>
            ))
          )}

          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total</span>
            <span className="text-green-600">₹{total}</span>
          </div>
        </div>

        {/* DELIVERY */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">
            📍 Delivery Details
          </h2>

          <p className="text-gray-600 text-sm">
            Home • 25-3-12, Nellore, Andhra Pradesh
          </p>

          <p className="text-green-600 text-sm mt-2">
            🚀 Delivery in 25–30 mins
          </p>
        </div>

        {/* PAYMENT BUTTON */}
        <div className="bg-white rounded-xl shadow-md p-4 sticky bottom-4">
          <div className="flex justify-between mb-3 font-bold text-lg">
            <span>To Pay</span>
            <span className="text-green-600">₹{total}</span>
          </div>

          <button
            onClick={handlePayment}
            disabled={cart.length === 0}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              cart.length === 0
                ? "bg-gray-400"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            💳 Pay Now
          </button>
        </div>
      </div>

      {/* 🔥 PAYMENT MODAL */}
      {showPayment && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl w-80 shadow-2xl relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              disabled={loading}
            >
              ✖
            </button>

            {/* TITLE */}
            <h2 className="text-lg font-bold mb-4 text-center">
              💳 Select Payment Method
            </h2>

            {/* 🔄 LOADING */}
            {loading && (
              <div className="flex flex-col items-center mb-4">
                <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-gray-600 mt-2">
                  Processing payment...
                </p>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex flex-col gap-3">

              <button
                onClick={() => confirmPayment("COD")}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
              >
                💵 Cash on Delivery
              </button>

              <button
                onClick={() => confirmPayment("UPI")}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
              >
                📲 UPI / Card
              </button>

              <button
                onClick={() => setShowPayment(false)}
                disabled={loading}
                className="py-2 rounded-lg border hover:bg-gray-100 transition disabled:opacity-50"
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;