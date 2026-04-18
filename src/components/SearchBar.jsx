import React, { useState, useMemo, useEffect, useRef } from "react";
import { foods } from "../data/foodData";

const SearchBar = ({ search, setSearch }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [listening, setListening] = useState(false);
  const inputRef = useRef(null);

  const normalize = (str) => str?.toLowerCase().trim();

  // 🔥 AUTOCOMPLETE SUGGESTIONS
  const suggestions = useMemo(() => {
    if (!search) return [];

    const s = normalize(search);

    return foods
      .filter((food) => normalize(food.name).includes(s))
      .slice(0, 6); // limit like Swiggy
  }, [search]);

  // 🎤 VOICE SEARCH
  const startVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice search not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
  const text = event.results[0][0].transcript
    .replace(/[.,!?]$/, "")
    .trim();

  setSearch(text);
  setListening(false);
  setShowSuggestions(false);
};

    recognition.onerror = () => setListening(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">

      {/* 🔍 INPUT */}
      <div className="flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2">
        <input
          ref={inputRef}
          type="text"
          value={search}
          placeholder="Search food..."
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          className="w-full outline-none text-sm md:text-base"
        />

        {/* 🎤 VOICE BUTTON */}
        <button
          onClick={startVoiceSearch}
          className={`text-xl ${
            listening ? "text-red-500 animate-pulse" : "text-gray-600"
          }`}
        >
          🎤
        </button>
      </div>

      {/* 📱 AUTOCOMPLETE DROPDOWN */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-20 w-full bg-white mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">

          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSearch(item.name);
                setShowSuggestions(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
            >
              <span>{item.name}</span>
              <span className="text-xs text-gray-400">{item.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;