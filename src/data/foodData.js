import { foodImages } from "./foodImages";
const getImage = (name) => foodImages[name] || foodImages.default;

export const foods = [
  // 🍽️ tIFFINS
  { name: "Masala Dosa", category: "tiffins" },
  { name: "Plain Dosa", category: "tiffins" },
  { name: "Onion Dosa", category: "tiffins" },
  { name: "Ghee Dosa", category: "tiffins" },
  { name: "Paper Dosa", category: "tiffins" },
  { name: "Rava Dosa", category: "tiffins" },
  { name: "Set Dosa", category: "tiffins" },
  { name: "Pesarattu", category: "tiffins" },
  { name: "Idli", category: "tiffins" },
  { name: "Sambar Idli", category: "tiffins" },
  { name: "Rava Idli", category: "tiffins" },
  { name: "Mini Idli", category: "tiffins" },
  { name: "Medu Vada", category: "tiffins" },
  { name: "Masala Vada", category: "tiffins" },
  { name: "Punugulu", category: "tiffins" },
  { name: "Bonda", category: "tiffins" },
  { name: "Upma", category: "tiffins" },
  { name: "Pongal", category: "tiffins" },
  { name: "Uttapam", category: "tiffins" },
  { name: "Neer Dosa", category: "tiffins" },
  { name: "Akki Roti", category: "tiffins" },
  { name: "Ragi Mudde", category: "tiffins" },
  { name: "Appam", category: "tiffins" },
  { name: "Parotta", category: "tiffins" },
  { name: "Chapati", category: "tiffins" },
  { name: "Poori", category: "tiffins" },
  { name: "Kuzhi Paniyaram", category: "tiffins" },
  { name: "Adai", category: "tiffins" },
  { name: "Egg Dosa", category: "tiffins" },
  { name: "Paneer Dosa", category: "tiffins" },
  { name: "Cheese Dosa", category: "tiffins" },
  { name: "Mushroom Dosa", category: "tiffins" },
  { name: "Corn Dosa", category: "tiffins" },

  // 🍛 hOT / MAINS
  { name: "Veg Biryani", category: "hot" },
  { name: "Chicken Biryani", category: "hot" },
  { name: "Mutton Biryani", category: "hot" },
  { name: "Hyderabadi Dum Biryani", category: "hot" },
  { name: "Andhra meals", category: "hot" },
  { name: "meals", category: "hot" },
  { name: "Mini meals", category: "hot" },
  { name: "Sambar Rice", category: "hot" },
  { name: "Rasam Rice", category: "hot" },
  { name: "Pulihora", category: "hot" },
  { name: "Lemon Rice", category: "hot" },
  { name: "Curd Rice", category: "hot" },
  { name: "Tomato Rice", category: "hot" },
  { name: "Bisi Bele Bath", category: "hot" },
  { name: "Egg Curry", category: "hot" },
  { name: "Fish Fry", category: "hot" },
  { name: "Prawn Fry", category: "hot" },
  { name: "Chettinad Chicken", category: "hot" },
  { name: "Pepper Chicken", category: "hot" },
  { name: "Mutton Curry", category: "hot" },
  { name: "Andhra Chicken Curry", category: "hot" },

  // 🌶️ sPICY / sNACKS
  { name: "Mirchi Bajji", category: "spicy" },
  { name: "Aloo Bajji", category: "spicy" },
  { name: "Samosa", category: "spicy" },
  { name: "Cutlet", category: "spicy" },
  { name: "Pakora", category: "spicy" },
  { name: "Paneer Tikka", category: "spicy" },
  { name: "Chicken 65", category: "spicy" },
  { name: "Gobi 65", category: "spicy" },
  { name: "Chilli Paneer", category: "spicy" },
  { name: "Mysore Bonda", category: "spicy" },
  { name: "Kothu Parotta", category: "spicy" },

  // 🍬 sWEETS
  { name: "Gulab Jamun", category: "sweet" },
  { name: "Rasgulla", category: "sweet" },
  { name: "Rasmalai", category: "sweet" },
  { name: "Jalebi", category: "sweet" },
  { name: "Kaju Katli", category: "sweet" },
  { name: "Barfi", category: "sweet" },
  { name: "Besan Laddu", category: "sweet" },
  { name: "Motichoor Laddu", category: "sweet" },
  { name: "Mysore Pak", category: "sweet" },
  { name: "Gajar Halwa", category: "sweet" },
  { name: "Suji Halwa", category: "sweet" },
  { name: "Sandesh", category: "sweet" },
  { name: "Payasam", category: "sweet" },
  { name: "Kesari", category: "sweet" },
  { name: "Kaja", category: "sweet" },
  { name: "Boondi", category: "sweet" },
  { name: "Jangri", category: "sweet" },
  { name: "Peda", category: "sweet" },
  { name: "Soan Papdi", category: "sweet" },
  { name: "Brownie with Ice Cream", category: "sweet" },
  { name: "Cheesecake", category: "sweet" },
  { name: "Chocolate Lava Cake", category: "sweet" },
  { name: "Ice Cream Sundae", category: "sweet" },
  { name: "Waffles", category: "sweet" },
  { name: "Pancakes", category: "sweet" },
  { name: "Donuts", category: "sweet" },

  // 🥗 SIDES / CHUTNEYS
  { name: "Avial", category: "meals" },
  { name: "Poriyal", category: "meals" },
  { name: "Kootu", category: "meals" },
  { name: "Thoran", category: "meals" },
  { name: "Pappu", category: "meals" },
  { name: "Gongura Pachadi", category: "meals" },
  { name: "Tomato Pachadi", category: "meals" },
  { name: "Coconut Chutney", category: "meals" },
  { name: "Peanut Chutney", category: "meals" },
  { name: "Mint Chutney", category: "meals" },
  { name: "Mango Pickle", category: "meals" },
  { name: "Lemon Pickle", category: "meals" },

  // 🥨 sNACKS
  { name: "Murukku", category: "snacks" },
  { name: "Mixture", category: "snacks" },
  { name: "Chakli", category: "snacks" },
  { name: "Banana Chips", category: "snacks" },
  { name: "Biscuits", category: "snacks" },
  { name: "Khara Bath", category: "snacks" },
  { name: "Kesari Bath", category: "snacks" },
  { name: "Onion Pakoda", category: "snacks" },
  { name: "Sabudana Vada", category: "snacks" },
  { name: "Kara Boondi", category: "snacks" }
].map((item, index) => {
  // 🔥 AUTO VEG/NON-VEG
  const nonVegItems = ["Chicken", "Mutton", "Fish", "Prawn", "Egg"];

  const isNonVeg = nonVegItems.some((word) =>
    item.name.toLowerCase().includes(word.toLowerCase())
  );

  // 🔥 RANDOM BESTSELLER (20%)
  const isBestSeller = Math.random() < 0.2;

  return {
    id: index + 1,
    ...item,
    price: Math.floor(Math.random() * 200) + 50,
    image: getImage(item.name),

    // ✅ ADD THESE
    type: isNonVeg ? "non-veg" : "veg",
    bestSeller: isBestSeller,
  };
});