import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderComplete = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);

    const savedRatings =
      JSON.parse(localStorage.getItem("ratings")) || [];

    savedRatings.push({
      rating: value,
      time: new Date().toLocaleString(),
    });

    localStorage.setItem("ratings", JSON.stringify(savedRatings));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100 px-4">

      {/* CARD */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full animate-[fadeIn_0.5s_ease]">

        {/* SUCCESS ICON */}
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
          <span className="text-4xl">🎉</span>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          Delivered Successfully!
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 mb-6">
          Hope you enjoy your food 🍛
        </p>

        {/* DELIVERY INFO */}
        <div className="bg-gray-100 rounded-xl p-3 text-sm mb-6">
          🚀 Delivered in <span className="font-semibold">25–30 mins</span>
        </div>

        {/* ⭐ RATING */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Rate your order</p>

          <div className="flex justify-center gap-2 text-2xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                className={`cursor-pointer transition ${
                  star <= rating
                    ? "text-yellow-400 scale-110"
                    : "text-gray-300"
                }`}
              >
                ⭐
              </span>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3">

          <button
            onClick={() => navigate("/menu")}
            className="bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            🔁 Order Again
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="border py-3 rounded-xl hover:bg-gray-100 transition"
          >
            📦 View Orders
          </button>

          <button
            onClick={() => navigate("/")}
            className="text-gray-500 hover:text-black transition"
          >
            🏠 Go Home
          </button>

        </div>
      </div>
    </div>
  );
};

export default OrderComplete;