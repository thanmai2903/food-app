import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import toast from "react-hot-toast";

const steps = [
  "Order Placed",
  "Preparing Food",
  "Out for Delivery",
  "Delivered",
];

const center = {
  lat: 14.4426,
  lng: 79.9865,
};

const riderStart = {
  lat: 14.45,
  lng: 79.99,
};

const path = [
  { lat: 14.45, lng: 79.99 },
  { lat: 14.4426, lng: 79.9865 },
];

const OrderTracking = () => {
  const [step, setStep] = useState(0);
  const [rider, setRider] = useState(riderStart);
  const navigate = useNavigate();

  // 🚚 STEP PROGRESS
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;

        clearInterval(interval);

        setTimeout(() => {
          navigate("/order-complete");
        }, 2000);

        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🛵 MOVE RIDER
  useEffect(() => {
    const move = setInterval(() => {
      setRider((prev) => ({
        lat: prev.lat - 0.0005,
        lng: prev.lng - 0.0005,
      }));
    }, 1000);

    return () => clearInterval(move);
  }, []);

  // 🔔 NOTIFICATIONS
  useEffect(() => {
    if (step === 2) {
      toast("🛵 Your order is out for delivery!");
    }

    if (step === 3) {
      toast.success("🎉 Delivered successfully!");
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-5 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          🚚 Live Order Tracking
        </h2>

        {/* 🗺️ MAP */}
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={{ height: "200px", width: "100%" }}
            center={center}
            zoom={13}
          >
            <Marker position={center} label="🍽️" />
            <Marker position={rider} label="🛵" />

            {/* ROUTE LINE */}
            <Polyline
              path={path}
              options={{
                strokeColor: "#22c55e",
                strokeOpacity: 1,
                strokeWeight: 4,
              }}
            />
          </GoogleMap>
        </LoadScript>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 h-2 rounded-full my-4">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{
              width: `${(step / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* STEPS */}
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3 mb-3">
            <div
              className={`w-4 h-4 rounded-full ${
                i <= step ? "bg-green-500 animate-pulse" : "bg-gray-300"
              }`}
            />
            <p className={i <= step ? "text-green-600" : "text-gray-400"}>
              {s}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;