import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const cities = [
  { city: "Chennai", country: "India", temp: 33, condition: "Sunny", humidity: 58, wind: 12 },
  { city: "Mumbai", country: "India", temp: 30, condition: "Cloudy", humidity: 65, wind: 14 },
  { city: "London", country: "UK", temp: 18, condition: "Rainy", humidity: 80, wind: 20 },
  { city: "New York", country: "USA", temp: 12, condition: "Cloudy", humidity: 70, wind: 15 },
  { city: "Los Angeles", country: "USA", temp: 25, condition: "Sunny", humidity: 55, wind: 10 },
  { city: "Tokyo", country: "Japan", temp: 26, condition: "Windy", humidity: 60, wind: 22 },
  { city: "Osaka", country: "Japan", temp: 22, condition: "Rainy", humidity: 70, wind: 18 },
  { city: "Sydney", country: "Australia", temp: 20, condition: "Snowy", humidity: 68, wind: 14 },
];

function WeatherIcon({ condition }) {
  const icons = {
    Sunny: "☀",
    Rainy: "🌧",
    Cloudy: "☁",
    Windy: "💨",
    Snowy: "❄",
  };
  return <span className="weather-icon">{icons[condition] || "🌈"}</span>;
}

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const countries = ["All", ...new Set(cities.map((c) => c.country))];

  const filteredCities =
    selectedCountry === "All"
      ? cities
      : cities.filter((c) => c.country === selectedCountry);

  return (
    <div className="app">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="title"
      >
        🌍 Impressive Blue Weather Dashboard
      </motion.h1>

      <div className="filter-container">
        <label htmlFor="country">Select Country: </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="card-grid">
        {filteredCities.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="card"
          >
            <WeatherIcon condition={c.condition} />
            <h2>{c.city}</h2>
            <p className="temp">{c.temp}°C</p>
            <p className="condition">{c.condition}</p>
            <div className="details">
              💧 {c.humidity}% &nbsp; | &nbsp; 🌬 {c.wind} km/h
            </div>
          </motion.div>
        ))}
      </div>

      <footer className="footer">
        Designed by <span className="highlight">Dinesh Kumar</span> ✨
      </footer>
    </div>
  );
}
