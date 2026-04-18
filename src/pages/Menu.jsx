import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";
import CategoryFilter from "../components/CategoryFilter";
import { foods } from "../data/foodData";

const Menu = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
const urlCategory = (params.get("category") || "all").toLowerCase();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(urlCategory);

  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  // 🔥 SMART NORMALIZER
  const normalize = (str) => str?.toLowerCase().trim() || "";

  // 🚀 SMART SEARCH + FILTER (SWIGGY STYLE)
  const filteredFoods = useMemo(() => {
    const searchText = normalize(search);
    const selectedCategory = normalize(category);

    return foods
      .filter((food) => {
        const name = normalize(food.name);
        const foodCategory = normalize(food.category);

        const matchesSearch =
          searchText === "" || name.includes(searchText);

        const matchesCategory =
          selectedCategory === "all" || foodCategory === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      // 🔥 PRIORITY SORTING (important upgrade)
      .sort((a, b) => {
        const aName = normalize(a.name);
        const bName = normalize(b.name);

        const aStarts = aName.startsWith(searchText) ? 1 : 0;
        const bStarts = bName.startsWith(searchText) ? 1 : 0;

        return bStarts - aStarts;
      });
      return (
      (!searchText || normalize(food.name).includes(searchText)) &&
      (selectedCategory === "all" ||
        normalize(food.category) === selectedCategory)
    );
  }, [search, category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 md:px-10 py-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          🍽️ Explore Delicious Food
        </h1>

        {/* SEARCH */}
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* CATEGORY FILTER */}
      <div className="sticky top-0 z-10 bg-gray-100 py-4">
        <CategoryFilter setCategory={setCategory} />
      </div>

      {/* FOOD GRID */}
<div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg mt-10">
            No foods found 😢
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;