import React, { useState, useEffect } from "react";

const steps = [
  "Order Placed",
  "Preparing Food",
  "Out for Delivery",
  "Delivered",
];

const OrderTracking = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl p-6 rounded-xl mt-10">
      <h2 className="text-xl font-bold mb-4">🚚 Live Order Tracking</h2>

      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-3 mb-3">
          <div
            className={`w-4 h-4 rounded-full ${
              i <= step ? "bg-green-500" : "bg-gray-300"
            }`}
          />
          <p className={i <= step ? "text-green-600" : "text-gray-400"}>
            {s}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrderTracking;