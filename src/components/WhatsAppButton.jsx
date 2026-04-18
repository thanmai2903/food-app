import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phone = "919441918650"; // your number with country code
  const message = "Hi! I want to order South Indian food 🍛";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;