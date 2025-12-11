import React from "react";

export default function HeroBanner() {
  return (
    <div
      className="w-full h-50 rounded-xl flex items-center justify-center text-white text-xl font-semibold bg-cover bg-center"
      style={{ backgroundImage: 'url(/8.png)' }}
    >
      Find Your Community on Daccord
    </div>
  );
}