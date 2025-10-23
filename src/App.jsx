import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [popup, setPopup] = useState({ open: false, type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setPopup({
        open: true,
        type: "error",
        message: "⚠ Please enter your email and password.",
      });
      return;
    }

    // Simulate successful login
    setPopup({
      open: true,
      type: "success",
      message: "✅ Login successful! Welcome back.",
    });
  };

  const closePopup = () => {
    setPopup({ open: false, type: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 bg-cover bg-center">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-sm mx-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email / Username
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm text-blue-500 hover:text-blue-600 transition-colors underline-offset-2"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg
             hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-150"
          >
            Login
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {popup.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-80 text-center">
            <h3
              className={`text-lg font-semibold mb-3 ${
                popup.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {popup.type === "success" ? "Success" : "Error"}
            </h3>
            <p className="text-gray-700 mb-4">{popup.message}</p>
            <button
              onClick={closePopup}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
