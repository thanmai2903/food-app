import { useCart } from "../context/CartContext";

const FloatingCart = ({ setCartOpen }) => {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  if (count === 0) return null;

  return (
    <div
      onClick={() => setCartOpen(true)}
      className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 cursor-pointer hover:scale-105 transition z-50"
    >
      🛒 {count}
    </div>
  );
};

export default FloatingCart;