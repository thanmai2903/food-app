import React, { useState } from "react";

const TableBooking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "",
    date: "",
  });

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-2xl p-6 rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-4">🍽️ Book a Table</h2>

      <input
        placeholder="Name"
        className="w-full p-3 border mb-3 rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Phone"
        className="w-full p-3 border mb-3 rounded"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        placeholder="No of People"
        className="w-full p-3 border mb-3 rounded"
        onChange={(e) => setForm({ ...form, people: e.target.value })}
      />

      <input
        type="date"
        className="w-full p-3 border mb-3 rounded"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <button
        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        onClick={() => {
          alert("Table booked successfully 🍛");
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default TableBooking;