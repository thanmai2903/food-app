import React from "react";
import { useCart } from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-32 object-cover"
      />

      <div className="p-3">
        <h3 className="font-semibold">{food.name}</h3>
        <p className="text-sm text-gray-500">{food.category}</p>
        <p className="font-bold">₹{food.price}</p>

        <button
          onClick={() => addToCart(food)}
          className="mt-2 w-full bg-black text-white py-1 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;