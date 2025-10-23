import { useState } from "react";

export default function AuthPage() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});

  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [signupErrors, setSignupErrors] = useState({});

  const [showSignup, setShowSignup] = useState(false);
  const [popup, setPopup] = useState({ open: false, message: "" });

  // ===== Login handlers =====
  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setLoginErrors({ ...loginErrors, [e.target.name]: "" });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!loginForm.email) errors.email = "Email is required";
    if (!loginForm.password) errors.password = "Password is required";

    setLoginErrors(errors);

    if (Object.keys(errors).length === 0) {
      setPopup({ open: true, message: "Login successful! Welcome back." });
    }
  };

  // ===== Signup handlers =====
  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    setSignupErrors({ ...signupErrors, [e.target.name]: "" });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(signupForm).forEach((key) => {
      if (!signupForm[key])
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
    });

    setSignupErrors(errors);

    if (Object.keys(errors).length === 0) {
      setPopup({ open: true, message: `Signup successful! Welcome, ${signupForm.firstName}.` });
      setSignupForm({ firstName: "", lastName: "", phone: "", email: "", password: "" });
      setShowSignup(false);
    }
  };

  const closePopup = () => {
    setPopup({ open: false, message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {showSignup ? "Signup" : "Login"}
        </h2>

        {showSignup ? (
          <form onSubmit={handleSignupSubmit} className="space-y-5">
            {["firstName", "lastName", "phone", "email", "password"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={signupForm[field]}
                  onChange={handleSignupChange}
                  placeholder={`Enter your ${field}`}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${signupErrors[field] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                    }`}
                />
                {signupErrors[field] && (
                  <p className="text-red-500 text-sm mt-1">{signupErrors[field]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              Signup
            </button>

            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <button type="button" onClick={() => setShowSignup(false)} className="text-blue-500 underline cursor-pointer">
                Login
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit} className="space-y-5">
            {["email", "password"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  {field === "email" ? "Email / Username" : "Password"}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={loginForm[field]}
                  onChange={handleLoginChange}
                  placeholder={`Enter your ${field}`}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${loginErrors[field] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                    }`}
                />
                {loginErrors[field] && <p className="text-red-500 text-sm mt-1">{loginErrors[field]}</p>}
              </div>
            ))}
            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm text-blue-500 hover:text-blue-600 transition-colors underline-offset-2"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              Login
            </button>

            <p className="text-center text-sm mt-2">
              Don't have an account?{" "}
              <button type="button" onClick={() => setShowSignup(true)} className="text-sm text-blue-500 cursor-pointer underline">
                Signup
              </button>
            </p>
          </form>
        )}
      </div>

      {/* Success Popup */}
      {popup.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-80 text-center">
            <h3 className="text-lg font-semibold mb-3 text-green-600">Success</h3>
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
