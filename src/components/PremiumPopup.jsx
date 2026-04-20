import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PremiumPopup = ({
  isOpen,
  title,
  message,
  type = "success",
  onClose,
  actionText,
  onAction,
}) => {
  const isSuccess = type === "success";
  const isWarning = type === "warning";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-md flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.85, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-8"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">
                {isSuccess ? "✅" : isWarning ? "🔐" : "⚠️"}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {title}
              </h2>

              <p className="text-gray-500 mb-6 leading-7">
                {message}
              </p>

              <div className="flex gap-3">
                {actionText && (
                  <button
                    onClick={onAction}
                    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition"
                  >
                    {actionText}
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumPopup;