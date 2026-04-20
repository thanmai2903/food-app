import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";
import CategoryFilter from "../components/CategoryFilter";
import { foods } from "../data/foodData";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PremiumPopup from "../components/PremiumPopup";
const Menu = ({ setCartOpen }) => {
  const location = useLocation();
const navigate = useNavigate();
const { user } = useAuth();
const isLoggedIn = !!user;

const [showLoginPopup, setShowLoginPopup] = useState(false);
  const params = new URLSearchParams(location.search);
  const urlCategory = (params.get("category") || "all").toLowerCase();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(urlCategory);

  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  const normalize = (str) => str?.toLowerCase().trim() || "";

  const filteredFoods = useMemo(() => {
    const searchText = normalize(search);
    const selectedCategory = normalize(category);

    return foods
      .filter((food) => {
        const name = normalize(food.name);
        const foodCategory = normalize(food.category);

        return (
          (searchText === "" || name.includes(searchText)) &&
          (selectedCategory === "all" ||
            foodCategory === selectedCategory)
        );
      })
      .sort((a, b) => {
        const aStarts = normalize(a.name).startsWith(searchText) ? 1 : 0;
        const bStarts = normalize(b.name).startsWith(searchText) ? 1 : 0;
        return bStarts - aStarts;
      });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 md:px-10 py-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          🍽️ Explore Delicious Food
        </h1>

        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* CATEGORY FILTER */}
      <div className="sticky top-0 cursor-pointer z-10 bg-gray-100 py-4">
        <CategoryFilter setCategory={setCategory} />
      </div>

      {/* FOOD GRID */}
      <div className="max-w-6xl cursor-pointer mx-auto mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {filteredFoods.length > 0 ? (
    filteredFoods.map((food) => (
      <FoodCard
        key={food.id}
        food={food}
        setCartOpen={setCartOpen}
        onRequireLogin={() => setShowLoginPopup(true)}
      />
    ))
  ) : (
    <div className="col-span-full text-center text-gray-500 text-lg mt-10">
      No foods found 😢
    </div>
  )}
</div>
<PremiumPopup
  isOpen={showLoginPopup}
  type="warning"
  title="Login Required"
  message="Please login or create an account to order your favorite dishes."
  actionText="Login"
  onAction={() => navigate("/login")}
  onClose={() => setShowLoginPopup(false)}
/>
    </div>
  );
};

export default Menu;