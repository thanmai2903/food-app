import React, { useEffect,useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Thanmai",
    role: "Food Lover",
    review:
      "Amazing taste and super quick delivery. The Masala Dosa was absolutely perfect and served hot!",
  },
  {
    name: "Nani",
    role: "Regular Customer",
    review:
      "Loved the crispy dosa and delicious chutneys. The food arrived fresh and warm.",
  },
  {
    name: "Shakunthala",
    role: "Homely Food Enthusiast",
    review:
      "Authentic South Indian meals just like home-cooked food. Highly satisfying experience.",
  },
  {
    name: "Narasimha",
    role: "Regular Customer",
    review:
      "Authentic South Indian meals. It truly felt like home food. Highly recommended.",
  },
  {
    name: "Sujay",
    role: "Weekend Foodie",
    review:
      "The biryani was rich in flavor and the packaging was excellent.",
  },
  {
    name: "Sumit",
    role: "Food Blogger",
    review:
      "Beautiful presentation and excellent taste. Loved the premium UI experience too!",
  },
  {
    name: "Srikanth",
    role: "Daily Customer",
    review:
      "Fast delivery and tasty meals. The snacks section is my favorite.",
  },
  {
    name: "Meda",
    role: "Food Reviewer",
    review:
      "Fresh ingredients and hygienic preparation. Very professional service.",
  },
  {
    name: "Deepthi",
    role: "Food Lover",
    review:
      "The sweets were delicious, especially Mysore Pak and Gulab Jamun.",
  },
  {
    name: "Janu",
    role: "Happy Customer",
    review:
      "Very smooth ordering experience and premium food quality.",
  },
  {
    name: "Pavani",
    role: "Snack Enthusiast",
    review:
      "Loved the spicy snacks and hot tiffins. Amazing taste!",
  },
  {
    name: "Anji",
    role: "Food Explorer",
    review:
      "The meals combo was perfect for lunch. Excellent taste and quantity.",
  },
  {
    name: "Pamuleti",
    role: "Regular Buyer",
    review:
      "Quick service and traditional flavors. Worth every rupee.",
  },
  {
    name: "Naramma",
    role: "Traditional Food Lover",
    review:
      "The food reminded me of authentic homemade South Indian dishes.",
  },
  {
    name: "Vedan",
    role: "Food Critic",
    review:
      "Excellent presentation and premium ingredients used.",
  },
  {
    name: "Keerthana",
    role: "Food Blogger",
    review:
      "Loved the aesthetics and the taste equally. Great experience.",
  },
  {
    name: "Aana",
    role: "Customer",
    review:
      "Perfect blend of spices and freshness. The biryani was outstanding.",
  },
  {
    name: "Sujatha",
    role: "Regular Customer",
    review:
      "Amazing tiffins and snacks. Delivery was faster than expected.",
  },
  {
    name: "Subbaiah",
    role: "Loyal Customer",
    review:
      "Traditional taste with modern presentation. Very impressive.",
  },
  {
    name: "Chandrakala",
    role: "Sweet Lover",
    review:
      "Loved the desserts section. Soft, fresh, and perfectly sweet.",
  },
  {
    name: "Nagendra",
    role: "Food Enthusiast",
    review:
      "Meals were filling and delicious. Highly recommended.",
  },
  {
    name: "Muskan",
    role: "Happy Customer",
    review:
      "Professional service and delicious flavors. Will order again.",
  },
  {
    name: "Manasa",
    role: "Food Blogger",
    review:
      "Excellent taste and beautiful food cards design.",
  },
  {
    name: "Abitha",
    role: "Customer",
    review:
      "The app design is smooth and the food quality is amazing.",
  },
  {
    name: "Kala Jyanthi",
    role: "Traditional Food Lover",
    review:
      "Loved the authenticity of South Indian meals and snacks.",
  },
  {
    name: "Tulasi",
    role: "Food Enthusiast",
    review:
      "Fresh and hot food every time. Great user experience.",
  },
  {
    name: "Munemma",
    role: "Loyal Customer",
    review:
      "One of the best South Indian food experiences online.",
  },
];

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14"
>
  {[
    { count: "2000+", label: "Happy Customers" },
    { count: "4.9★", label: "Average Rating" },
    { count: "100+", label: "Food Varieties" },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
    >
      <h3 className="text-4xl font-extrabold text-pink-500 mb-2">
        {item.count}
      </h3>
      <p className="text-gray-600 font-medium">
        {item.label}
      </p>
    </div>
  ))}
</motion.div>

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  

  return (
    <div
      className="max-w-4xl mx-auto mt-12 relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 text-2xl hover:bg-pink-100 transition z-10"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 text-2xl hover:bg-pink-100 transition z-10"
      >
        ›
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10"
        >
          <div className="flex items-center gap-5 mb-6">
  <div className="w-16 h-16 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-2xl font-semibold text-pink-600 shadow-sm">
  {reviews[current].name.charAt(0)}
</div>

  <div>
    <h3 className="text-2xl font-bold text-gray-900">
      {reviews[current].name}
    </h3>

    <p className="text-sm text-gray-500">
      {reviews[current].role}
    </p>

    <div className="text-yellow-400 text-lg mt-1">
      ⭐⭐⭐⭐⭐
    </div>
  </div>
</div>

          <div className="relative mt-6 bg-pink-50 rounded-2xl p-6">
  <span className="absolute top-2 left-4 text-7xl font-bold text-pink-200 select-none">
    “
  </span>

  <p className="relative text-gray-600 text-xl leading-9 italic pl-8 pt-4 z-10">
    {reviews[current].review}
  </p>
</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const [showCoupon, setShowCoupon] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    setCartItems([...cartItems, food]);
    setCartOpen(true);
  };

  const featuredFoods = [
    {
      name: "Masala Dosa",
      price: "₹80",
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    },
    {
      name: "Idli Sambar",
      price: "₹60",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921",
    },
    {
      name: "Hyderabadi Biryani",
      price: "₹180",
      image:
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    },
  ];

  const categories = [
    {
      name: "Tiffins",
      color:
        "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800",
    },
    {
      name: "Meals",
      color:
        "bg-gradient-to-r from-green-100 to-green-200 text-green-800",
    },
    {
      name: "Snacks",
      color:
        "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800",
    },
    {
      name: "Sweets",
      color:
        "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      
     <div>
       {showCoupon && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-[400px] text-center relative">
            <button
              onClick={() => setShowCoupon(false)}
              className="absolute top-3 right-4 text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-pink-500 mb-3">
              🎉 20% OFF
            </h2>

            <div className="bg-pink-100 text-pink-600 py-3 rounded-xl">
              SOUTH20
            </div>
          </div>
        </div>
      )}
    </div>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589302168068-964664d93dc0"
          alt="food"
          className="w-full h-[600px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl font-extrabold mb-4">
            Welcome to South Indian Flavors
          </h1>

          <p className="text-xl mb-8 max-w-2xl leading-8">
            Traditional taste • Fresh ingredients • Fast delivery • Premium experience
          </p>

          <Link to="/menu">
            <button className="bg-gradient-to-r from-pink-200 to-rose-200 cursor-pointer hover:from-pink-300 hover:to-rose-300 text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition duration-300">
              Explore Menu
            </button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Popular Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((item) => (
            <Link
              key={item.name}
              to={`/menu?category=${item.name.toLowerCase()}`}
              className={`${item.color} px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 font-semibold text-lg`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-10 bg-gradient-to-br from-white via-pink-50 to-slate-100">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "🍛",
              title: "Authentic Taste",
              text: "Traditional recipes prepared with rich South Indian flavors.",
            },
            {
              icon: "🚀",
              title: "Fast Delivery",
              text: "Fresh and hot food delivered quickly to your doorstep.",
            },
            {
              icon: "🌿",
              title: "Premium Hygiene",
              text: "Prepared in a clean kitchen with fresh ingredients.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Dishes */}
      <div className="py-20 px-10 bg-gradient-to-b from-white to-pink-50">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">
          Featured Dishes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredFoods.map((food, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{food.name}</h3>
                <p className="text-pink-500 font-bold text-2xl mt-3">
                  {food.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14"
>
  {[
    { count: "2000+", label: "Happy Customers" },
    { count: "4.9★", label: "Average Rating" },
    { count: "100+", label: "Food Varieties" },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
    >
      <h3 className="text-4xl font-extrabold text-pink-500 mb-2">
        {item.count}
      </h3>
      <p className="text-gray-600 font-medium">
        {item.label}
      </p>
    </div>
  ))}
</motion.div>

      {/* Reviews */}
      <div className="py-24 px-10 bg-gradient-to-br from-pink-50 via-white to-slate-100">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-gray-900 mb-4"
        >
          What Our Customers Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-lg max-w-3xl mx-auto mb-16"
        >
          Loved by food enthusiasts for authentic South Indian flavors.
        </motion.p>
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-16 px-6 md:px-10 bg-white"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      { count: "2000+", label: "Happy Customers" },
      { count: "100+", label: "South Indian Dishes" },
      { count: "24/7", label: "Fast Delivery" },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
      >
        <h3 className="text-4xl font-extrabold text-pink-500 mb-3">
          {item.count}
        </h3>
        <p className="text-gray-600 text-lg font-medium">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</motion.div>

        <ReviewCarousel />
        {/* More Dishes Showcase */}
<div className="py-24 px-6 md:px-10 bg-gradient-to-b from-white to-pink-50">
  <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
    More Special Dishes
  </h2>

  <p className="text-center text-gray-500 text-lg mb-14 max-w-3xl mx-auto">
    Explore more authentic South Indian favorites freshly prepared with
    premium ingredients and traditional flavors.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        name: "Paneer Dosa",
        price: "₹120",
        image:
          "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4",
      },
      {
        name: "Vada Sambar",
        price: "₹70",
        image:
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
      },
      {
        name: "Mysore Bonda",
        price: "₹90",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      },
      {
        name: "Filter Coffee",
        price: "₹50",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      },
      {
        name: "Poori Masala",
        price: "₹100",
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
      },
      {
        name: "Curd Rice",
        price: "₹80",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      },
      {
  name: "Lemon Rice",
  price: "₹90",
  image:
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
},
{
  name: "Gulab Jamun",
  price: "₹60",
  image:
    "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=800&q=80",
},
    ].map((dish, index) => (
      <div
        key={index}
        className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
      >
        <div className="overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800">
            {dish.name}
          </h3>

          <p className="text-pink-500 font-bold text-xl mt-2">
            {dish.price}
          </p>

          <button className="mt-4 w-full bg-pink-100 hover:bg-pink-200 text-pink-600 py-2 rounded-xl font-semibold transition">
            Order Now
          </button>
        </div>

      </div>
    ))}
  </div>
  
</div>
      </div>

      {/* Footer */}
      <footer className="bg-pink-100/90 mt-[-100px] text-black text-center py-6">
        <p className="text-lg">
          © 2026 South Flavors | Designed with ❤️
        </p>
      </footer>
    </div>
  );
};

export default Home;