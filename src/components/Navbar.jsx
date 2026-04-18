import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

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
          
          {/* Left side */}
          <div className="flex items-center gap-3">
            {/* Menu button for mobile + tablet */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-3xl text-gray-700 hover:text-pink-500 transition"
            >
              ☰
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center shadow-sm">
                🍛
              </div>

              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                South Indian Flavors
              </h1>
            </Link>
          </div>

          {/* Desktop / Laptop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-pink-500 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Auth buttons */}
            {user ? (
              <button
  onClick={logout}
  className="bg-red-500 hover:bg-red-600 hover:scale-105 transition duration-300 text-white px-4 py-2 rounded-xl shadow-md"
>
  Logout
</button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-pink-500 transition duration-300"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
                >
                  Signup
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Sidebar menu for mobile + tablet */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-pink-100 bg-pink-50">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-gray-600 hover:text-pink-500"
          >
            ✕
          </button>
        </div>

        {/* Sidebar links */}
        <ul className="flex flex-col p-6 gap-6 text-lg font-medium text-gray-700">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-pink-500 hover:translate-x-2 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Auth buttons mobile */}
          {user ? (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-xl"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-pink-500"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="text-pink-500"
              >
                Signup
              </Link>
            </>
          )}

          {/* Admin */}
          <Link
            to="/admin/messages"
            onClick={() => setMenuOpen(false)}
            className="text-red-500"
          >
            Admin
          </Link>
        </ul>
      </div>

      {/* Overlay */}
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