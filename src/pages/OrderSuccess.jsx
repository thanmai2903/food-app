import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OrderSuccess = () => {
  const navigate = useNavigate();

  // 🔥 AUTO REDIRECT
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/track-order");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100 px-4">
      
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md w-full animate-fade-in">

        {/* SUCCESS ICON */}
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
          <span className="text-4xl">✅</span>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Order Confirmed!
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 mb-4">
          Your food is being prepared 🍛
        </p>

        {/* DELIVERY INFO */}
        <div className="bg-gray-100 rounded-xl p-3 text-sm mb-6">
          🚀 Delivery in <span className="font-semibold">25–30 mins</span>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-6 overflow-hidden">
          <div className="bg-green-500 h-2 animate-progress"></div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3">

          <button
            onClick={() => navigate("/track-order")}
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            📦 Track Order
          </button>

          <button
            onClick={() => navigate("/")}
            className="border py-2 rounded-lg hover:bg-gray-100"
          >
            🏠 Go to Home
          </button>

        </div>

        {/* AUTO REDIRECT TEXT */}
        <p className="text-xs text-gray-400 mt-4">
          Redirecting to tracking...
        </p>

      </div>
    </div>
  );
};

export default OrderSuccess;