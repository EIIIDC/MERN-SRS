import "../App.css";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const API_BASE_URL = `https://cict-srs-server.onrender.com`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        { email, password }
      );

      if (
        response.data.status === true ||
        response.data.success === true ||
        response.data.succes === true
      ) {
        await login(response.data.user, response.data.token);
        
        
        toast.success("Login successful!");

        if (response.data.user.role === "superadmin") {
          navigate("/superadmin/dashboard");
        } else {
          navigate("/client/dashboard");
        }
      } else {
        
        toast.error(
          response.data.error ||
          response.data.message ||
          "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred during login.");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url(../src/assets/ictLOGO.svg)] bg-cover bg-center bg-no-repeat bg-bgblue/30 bg-blend-overlay md:bg-contain">
      
      <Toaster position="top-center" reverseOrder={false} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-complementaryblue/50 bg-blend-overlay p-4 rounded-lg shadow-md w-full max-w-sm"
      >
        <div className="form-group item-center justify-center">
          <label htmlFor="email" className="block text-lg font-medium mb-1">
            Email{" "}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="block text-lg font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full bg-white/70 border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {" "}
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <br />
      <div className="flex flex-col gap-1 bg-complementaryblue/80 bg-blend-overlay p-2 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="block text-md font-medium text-center">
          Don't have an account?
        </h1>
        <button
          type="button"
          onClick={() => navigate('/register')}
          className="p-1 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mt-0"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;