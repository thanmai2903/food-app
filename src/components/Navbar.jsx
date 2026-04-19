import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext"; // ✅ ADD

const Navbar = ({ setCartOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cart } = useCart(); // ✅ ADD

  // 🟢 COUNT TOTAL ITEMS
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Offers", path: "/offers" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-50 to-rose-50 border-b border-pink-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-3xl text-gray-700 hover:text-pink-500"
            >
              ☰
            </button>

            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center shadow-sm">
                🍛
              </div>

              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                South Indian Flavors
              </h1>
            </Link>
          </div>

          {/* RIGHT (DESKTOP) */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-pink-500 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* 🛒 CART ICON */}
            <div
              onClick={() => setCartOpen(true)}
              className="relative cursor-pointer text-2xl"
            >
              🛒

              {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </div>

            {/* AUTH */}
            {user ? (
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="hover:text-pink-500">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-pink-500 text-white px-4 py-2 rounded-xl"
                >
                  Signup
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b bg-pink-50">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <ul className="flex flex-col p-6 gap-6 text-lg font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* 🛒 CART IN MOBILE */}
          <button
            onClick={() => {
              setCartOpen(true);
              setMenuOpen(false);
            }}
            className="bg-black text-white py-2 rounded-lg"
          >
            🛒 View Cart ({itemCount})
          </button>

          {user ? (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="bg-red-500 text-white py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                Signup
              </Link>
            </>
          )}
        </ul>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;