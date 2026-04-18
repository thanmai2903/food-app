import React, { useState } from "react";

const offers = [
  {
    title: "🔥 Tiffin Special",
    desc: "Flat 20% OFF on all South Indian Tiffins",
    code: "TIFFIN20",
    highlight: "Limited Time",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "🍛 Meal Combo Deal",
    desc: "Full Meals + Dessert only at ₹199",
    code: "MEAL199",
    highlight: "Best Seller",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "🍬 Sweet Festival Offer",
    desc: "Buy 1 Sweet Box, Get 1 FREE",
    code: "SWEETFREE",
    highlight: "Festival Special",
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "🌶️ Spicy Feast Deal",
    desc: "Chicken 65 + Biryani combo at ₹249",
    code: "SPICY249",
    highlight: "Hot Deal",
    color: "from-yellow-400 to-orange-500",
  },
];

const Offers = () => {
  const [copied, setCopied] = useState("");

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(code);

    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10 py-10">

      {/* HEADER */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center">
        🎉 Special Offers
      </h1>

      <p className="text-center text-gray-600 mt-2 mb-10 text-sm sm:text-base">
        Delicious South Indian deals you can't resist
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">

        {offers.map((offer, index) => (
          <div
            key={index}
            className={`rounded-2xl p-5 sm:p-6 text-white shadow-lg bg-gradient-to-r ${offer.color} transform hover:scale-[1.03] transition duration-300`}
          >

            {/* BADGE */}
            <span className="bg-black/30 px-3 py-1 rounded-full text-xs">
              {offer.highlight}
            </span>

            {/* TITLE */}
            <h2 className="text-xl sm:text-2xl font-bold mt-3">
              {offer.title}
            </h2>

            {/* DESC */}
            <p className="mt-2 text-sm opacity-90">
              {offer.desc}
            </p>

            {/* FOOTER */}
            <div className="mt-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

              {/* CODE */}
              <div className="bg-white text-black px-3 py-2 rounded-lg font-bold text-center sm:text-left">
                {offer.code}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => copyCode(offer.code)}
                className="bg-black/30 px-4 py-2 rounded-lg hover:bg-black/50 transition"
              >
                {copied === offer.code ? "Copied ✔" : "Copy Code"}
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* FOOTER */}
      <p className="text-center text-gray-500 mt-10 text-xs sm:text-sm">
        *Offers valid only on selected South Indian restaurants
      </p>

    </div>
  );
};

export default Offers;