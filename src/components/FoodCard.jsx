import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const FoodCard = ({ food, setCartOpen }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!food) return;

    addToCart(food);
    setAdded(true);

    toast.success(`${food.name} added 🛒`);

    if (setCartOpen) setCartOpen(true);

    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group relative">

      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">

        <img
          src={food?.image}
          alt={food?.name}
          className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* 🟢 VEG / 🔴 NON-VEG BADGE */}
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow text-xs font-semibold flex items-center gap-1">
          <span
            className={`w-3 h-3 rounded-full ${
              food?.type === "veg" ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          {food?.type === "veg" ? "Veg" : "Non-Veg"}
        </div>

        {/* 🏆 BEST SELLER TAG */}
        {food?.bestSeller && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded shadow font-bold">
            ⭐ Bestseller
          </div>
        )}

        {/* ➕ QUICK ADD */}
        <button
          onClick={handleAdd}
          className="absolute bottom-2 right-2 bg-green-600 hover:bg-green-700 text-white w-10 h-10 rounded-full text-xl shadow-lg flex items-center justify-center"
        >
          +
        </button>
      </div>

      {/* DETAILS */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">
          {food?.name}
        </h3>

        <p className="text-sm text-gray-500">
          {food?.category}
        </p>

        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-green-600 text-lg">
            ₹{food?.price}
          </p>

          <span className="text-yellow-400 text-sm">
            ⭐ 4.5
          </span>
        </div>

        {/* ADD BUTTON */}
        <button
          onClick={handleAdd}
          className={`mt-3 w-full py-2 rounded-lg text-white font-medium transition-all duration-300 ${
            added
              ? "bg-green-600 scale-105"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;