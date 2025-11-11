import React, { useState } from "react";

export default function SimpleFormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Improved Email Regex — ensures valid domain extensions
  const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|org|net|in|co|edu|gov|io|ai|us|uk|info|biz|me)(\.[A-Za-z]{2})?$/;

  // ✅ Name regex (added, since your old code referenced nameRegex but didn’t define it)
  const nameRegex = /^[A-Za-z\s]+$/;

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setSuccess("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("✅ Form submitted successfully!");
      setFormData({ name: "", email: "", password: "" });
    } else {
      setSuccess("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#007bff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "90%",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#007bff" }}>
          Simple Form Validation
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                border:
                  errors.name && !formData.name.trim()
                    ? "1px solid red"
                    : "1px solid #ccc",
                borderRadius: "5px",
              }}
              placeholder="Enter your name"
            />
            {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: "15px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                border: errors.email ? "1px solid red" : "1px solid #ccc",
                borderRadius: "5px",
              }}
              placeholder="example@gmail.com"
            />
            {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "15px" }}>
            <label>Password:</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  border: errors.password ? "1px solid red" : "1px solid #ccc",
                  borderRadius: "5px",
                }}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  marginLeft: "5px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  background: "#007bff",
                  color: "#fff",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <small style={{ color: "red" }}>{errors.password}</small>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>

          {success && (
            <p
              style={{
                color: "green",
                marginTop: "15px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {success}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
