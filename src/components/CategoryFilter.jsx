import React from "react";

const categories = [
  "All",
  "Hot",
  "Sweet",
  "Spicy",
  "Tiffins",
  "Meals",
  "Snacks",
];

const CategoryFilter = ({ setCategory }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {categories.map((cat) => (
        <button
  key={cat}
  onClick={() => setCategory(cat.toLowerCase())}
  className="bg-white px-4 py-2 rounded-lg shadow hover:bg-orange-500 hover:text-white"
>
  {cat}
</button>
      ))}
    </div>
  );
};

export default CategoryFilter;