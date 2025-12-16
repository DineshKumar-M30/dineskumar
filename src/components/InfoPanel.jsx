export default function InfoPanel() {
  return (
    <div className="relative z-50 flex justify-center items-center w-full px-4">
      <div
        className="
          max-w-3xl w-full
          bg-white/10 backdrop-blur-xl
          border border-white/20 
          rounded-2xl p-6 sm:p-8 
          text-white shadow-xl
        "
      >
        <p className="leading-relaxed text-base sm:text-xl text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it.
        </p>
      </div>
    </div>
  );
}