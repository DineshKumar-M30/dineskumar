import React from "react";

export default function ContactPage({ onBack }) {
  return (
    <div className="absolute inset-0 w-full h-full z-[200] overflow-y-auto pt-16 pb-16 sm:pt-24 sm:pb-20">


      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-contact.png')" }}
      />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white text-base sm:text-lg tracking-wider hover:opacity-70 transition"
      >
        ← GO BACK
      </button>

      {/* CONTACT FORM  */}
      <div className="w-full max-w-3xl mx-auto px-6 flex flex-col gap-8 sm:gap-10">

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-lg sm:text-xl tracking-wider">EMAIL :</label>
          <input
            type="email"
            placeholder="yourname@gmail.com"
            className="w-full h-10 sm:h-12 rounded-md bg-white/10 border border-white/20 text-white px-4 "
          />
        </div>

        {/* SUBJECT */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-lg sm:text-xl tracking-wider">SUBJECT :</label>
          <input
            type="text"
            placeholder="Something something"
            className="w-full h-10 sm:h-12 rounded-md bg-white/10 border border-white/20 text-white px-4 "
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-lg sm:text-xl tracking-wider">CONTENT :</label>
          <textarea
            rows={6}
            placeholder="Write something..."
            className="w-full rounded-md bg-white/10 border border-white/20 text-white p-4 "
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          className="
            w-full py-3 sm:py-4 
            bg-white/10 border border-white/30 
            rounded-xl 
            neon-text tracking-widest text-base sm:text-lg
            hover:bg-white/20 transition
          "
        >
          SUBMIT
        </button>

      </div>
    </div>
  );
}