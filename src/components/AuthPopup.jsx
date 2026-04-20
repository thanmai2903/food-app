import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AuthPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onClose(); // close popup first
    navigate("/login");
  };

  const handleSignupClick = () => {
    onClose(); // close popup first
    navigate("/signup");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-black"
            >
              ×
            </button>

            <div className="text-center">
              <div className="text-5xl mb-4">🔐</div>

              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Login Required
              </h2>

              <p className="text-gray-500 mb-6">
                Please login or create an account to continue your delicious
                food order.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={handleLoginClick}
                  className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition"
                >
                  Login
                </button>

                <button
                  onClick={handleSignupClick}
                  className="flex-1 border border-pink-500 text-pink-500 hover:bg-pink-50 py-3 rounded-xl font-semibold transition"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthPopup;