import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TableBooking from "../components/TableBooking";

const About = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-50 overflow-hidden">

      {/* 🎥 HERO VIDEO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">

  {/* VIDEO */}
  <iframe
    className="absolute top-0 left-0 w-full h-full scale-150 pointer-events-none"
    src="https://www.youtube.com/embed/H3R1y1ADCZw?autoplay=1&mute=1&controls=0&loop=1&playlist=H3R1y1ADCZw"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

    <h1 className="text-4xl md:text-6xl font-extrabold">
      Taste of South India 🍛
    </h1>

    <p className="mt-4 opacity-90">
      Authentic food made with tradition, love & spice
    </p>

    <button
      onClick={() => navigate("/menu")}
      className="mt-6 px-6 py-3 cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-full"
    >
      Explore Menu
    </button>

  </div>

</div>

      {/* 👨‍🍳 CHEF STORY SECTION (ANIMATED) */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
  Master Chef of South Indian Cuisine 👨‍🍳
</h2>

<p className="text-gray-600 leading-relaxed">
  Our head chef is a highly experienced culinary expert specializing in authentic South Indian food.
  With over 20+ years of experience, he brings traditional flavors from Tamil Nadu, Andhra Pradesh,
  Karnataka, and Kerala kitchens straight to your plate.
</p>

<p className="mt-4 text-gray-600 leading-relaxed">
  From perfectly fermented idli batter to crispy golden dosas and spicy Chettinad curries,
  every dish is crafted with precision, passion, and heritage cooking techniques passed down through generations.
</p>

<p className="mt-4 text-gray-600 leading-relaxed">
  He believes that food is not just nourishment — it is culture, memory, and emotion served on a plate.
  Every recipe is prepared with fresh ingredients, balanced spices, and authentic homemade taste.
</p>

{/* QUOTE BOX */}
<div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-xl">
  <p className="text-sm text-gray-700 italic">
    ⭐ “A great dish doesn’t just satisfy hunger — it tells a story of tradition and love.”
  </p>
</div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
  src="https://images.squarespace-cdn.com/content/v1/5f063187ead18a2e98ba7f9b/987077a3-1ca9-4c2f-b1b7-96646d6047ef/Semma-22.jpg"
  alt="Chef"
  className="w-full mt-20 lg:ml-[20px] h-[650px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
/>
        </motion.div>

      </div>

      {/* 🍽 FOOD STORY SECTION */}
<div className="bg-gray-50 py-16">

  <h2 className="text-3xl font-bold text-center mb-14">
    Authentic South Indian Food Story 🍛
  </h2>

  <div className="max-w-6xl mx-auto space-y-20 px-6">

    {/* 1️⃣ IDLI + SAMBAR */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* IMAGE */}
      <img
        src="data:image/jpeg;base64,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"
  className="w-full h-[320px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
      />

      {/* TEXT */}
      <div>
        <h3 className="text-2xl font-bold mb-3">Soft Idli & Sambar 🥣</h3>
        <p className="text-gray-600 leading-relaxed">
          Steamed soft idlis served with hot, spicy sambar made from
          traditional South Indian lentils and fresh spices. A perfect
          breakfast that defines comfort food.
        </p>
      </div>

    </div>

    {/* 2️⃣ DOSA + PODI / ERRA KARAM */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* TEXT (LEFT THIS TIME) */}
      <div>
        <h3 className="text-2xl font-bold mb-3">Crispy Dosa with Erra Karam 🌶️</h3>
        <p className="text-gray-600 leading-relaxed">
          Golden crispy dosa served with spicy red chutney (Erra Karam)
          and podi. A perfect balance of crunch, spice, and aroma that
          South India is famous for.
        </p>
      </div>

      {/* IMAGE */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_kxyi8XSwW5LFf94Jlk-cw8j5ib9AJKHBw&s"
  className="w-full h-[320px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
      />

    </div>

    {/* 3️⃣ POORI */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* IMAGE */}
      <img
        src="data:image/jpeg;base64,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"
  className="w-full h-[320px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
      />

      {/* TEXT */}
      <div>
        <h3 className="text-2xl font-bold mb-3">Fluffy Poori & Curry 🥔</h3>
        <p className="text-gray-600 leading-relaxed">
          Deep-fried golden pooris served with hot potato curry. A
          timeless South Indian breakfast loved across generations.
        </p>
      </div>

    </div>

    {/* 4️⃣ CHUTNEY (BOMMAY / TOMATO STYLE) */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* TEXT */}
      <div>
        <h3 className="text-2xl font-bold mb-3">Spicy Chutneys & Dips 🥥</h3>
        <p className="text-gray-600 leading-relaxed">
          Coconut chutney, tomato chutney, and traditional spicy blends
          that enhance every South Indian dish. Every bite brings a burst
          of authentic flavor.
        </p>
      </div>

      {/* IMAGE */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVczDFJDzqR2-iDPXaALLkro6a0N4YJZYEw&s"
  className="w-full h-[320px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
      />

    </div>

  </div>
</div>
<TableBooking />

      {/* FOOTER */}
      <div className="text-center py-8 text-gray-600 text-sm bg-gradient-to-r from-pink-50 to-rose-100">
  Made with ❤️ for South Indian Food Lovers
</div>

    </div>
  );
};

export default About;