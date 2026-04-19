import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom"; // ✅ IMPORTANT

const CartSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate(); // ✅ ADD THIS
  const cartContext = useCart();

  if (!cartContext) return null;

  const {
    cart = [],
    addToCart,
    decreaseQty,
    removeFromCart,
    total,
  } = cartContext;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">🛒 Your Cart</h2>
        <button
          onClick={() => setOpen(false)}
          className="text-xl font-bold"
        >
          ✖
        </button>
      </div>

      {/* ITEMS */}
      <div className="p-3 space-y-3 overflow-y-auto h-[75%]">
        {cart.length === 0 ? (
          <div className="text-center mt-12">
            <div className="text-5xl">🍽️</div>
            <h3 className="text-lg font-semibold mt-2">
              Your cart is empty
            </h3>
            <p className="text-gray-500 text-sm">
              Add delicious food to start your order
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-2 shadow-sm"
            >
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                ₹{item.price}
              </p>

              {/* QTY */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 bg-gray-200 rounded"
                >
                  −
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => addToCart(item)}
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm mt-2"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full p-4 border-t bg-white shadow-inner">
        
        {/* TOTAL */}
        <div className="flex justify-between font-bold text-lg mb-3">
          <span>Total:</span>
          <span className="text-green-600">₹{total}</span>
        </div>

        {/* WHATSAPP ORDER */}
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-semibold"
          onClick={() => {
            const orderText = cart
              .map(
                (item) =>
                  `${item.name} x ${item.qty} = ₹${
                    item.price * item.qty
                  }`
              )
              .join("%0A");

            const message = `🍛 *New Order*%0A%0A${orderText}%0A%0A*Total: ₹${total}*`;

            window.open(
              `https://wa.me/919441918650?text=${message}`,
              "_blank"
            );
          }}
        >
          🚀 Place Order on WhatsApp
        </button>

        {/* PAYMENT */}
        <button
  disabled={cart.length === 0}
  onClick={() => {
    setOpen(false);
    navigate("/checkout");
  }}
  className={`w-full py-3 cursor-pointer rounded-lg mt-2 ${
    cart.length === 0
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-black hover:bg-gray-800 text-white"
  }`}
>
  Proceed to Payment 💳
</button>

      </div>
    </div>
  );
};

export default CartSidebar;