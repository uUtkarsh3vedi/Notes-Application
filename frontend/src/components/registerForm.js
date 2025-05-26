import React, { useState } from "react";
import { registerUser } from "../api/userApi";
import { useAuth } from "../context/AuthContext";
import "../styles/DashboardLayout.css";  

const RegisterForm = () => {
  const { login } = useAuth(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await registerUser(formData);
      if (token) {
        login(token); 
        alert("Registered successfully!");
      } else {
        alert("Registration failed: No token received.");
      }
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Registration failed");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
