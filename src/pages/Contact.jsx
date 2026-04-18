import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  // 🔔 SOUND
  const playSound = () => {
    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/button-3.mp3"
    );
    audio.play();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    emailjs
      .send(
        "service_iw535zq",
        "template_rfrl3ic",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "BzLhPsr_N0VYtTFg8"
      )
      .then(() => {
        setSent(true);
        playSound();
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-yellow-50">

      {/* HERO */}
      <div className="text-center py-14 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Contact & South Indian Taste 🍛
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Authentic South Indian food served fresh daily
        </p>
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10"
      >

        {/* LEFT INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-5">
            📍 Restaurant Details
          </h2>

          <div className="space-y-2 text-gray-700">
            <p>📧 <b>Email:</b> thanmaipalla@gmail.com</p>
            <p>📞 <b>Phone:</b> +91- 9441918650</p>
            <p>📍 <b>Location:</b> Andhra Pradesh, India</p>
            <p>⏰ <b>Timing:</b> 7:00 AM - 10:30 PM</p>
            <p>🚚 <b>Delivery:</b> 30–45 mins</p>
            <p>⭐ <b>Rating:</b> 4.9 / 5</p>
          </div>

          {/* QUOTE */}
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl">
            <p className="text-gray-700 font-medium">
              🍛 “We serve emotions, not just food.”
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-5">
            💬 Send Message
          </h2>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-3 border rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 mb-3 border rounded-lg"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 mb-3 border rounded-lg h-32"
          />

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Send Message 🚀
          </button>
        </form>
      </motion.div>

      {/* MAP SECTION */}
      {/* MAP */} <div className="w-full h-72 mt-10 rounded-xl overflow-hidden px-4 md:px-10"> <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=" loading="lazy" /> </div>


      {/* 🔥 FLOATING ACTION BUTTONS (FIXED PROPERLY) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex gap-3 bg-white shadow-2xl rounded-full px-4 py-2 border">

        {/* CALL */}
        <a
          href="tel:9441918650"
          className="relative flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full"
        >
          📞
          <span className="absolute w-full h-full rounded-full animate-ping bg-orange-400 opacity-40"></span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919441918650?text=Hi%20I%20want%20to%20order%20food"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full hover:scale-110 transition"
        >
          🟢
        </a>

        {/* MAP */}
        <a
          href="https://www.google.com/maps"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:scale-110 transition"
        >
          📍
        </a>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-xl"
          >
            ✅ Message Sent Successfully!
            <p className="text-sm">
              We will contact you soon 🍛
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <div className="text-center py-6 bg-pink-200 text-gray-700 text-sm mt-10">
        Made with ❤️ for South Indian Food Lovers
      </div>

    </div>
  );
};

export default Contact;