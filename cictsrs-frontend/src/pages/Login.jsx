import "../App.css";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { TextEffect } from "../../components/motion-primitives/text-effect";
import { BorderTrail } from "../../components/motion-primitives/border-trail";
import ictLOGO from "../assets/ictLOGO.svg";

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
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      if (
        response.data.status === true ||
        response.data.success === true ||
        response.data.succes === true
      ) {
        await login(response.data.user, response.data.token);

        toast.success("Login successful!");

        if (response.data.user.role === "superadmin") {
          navigate("/superadmin/manage");
        } else {
          navigate("/client/dashboard");
        }
      } else {
        toast.error(
          response.data.error ||
            response.data.message ||
            "Login failed. Please check your credentials.",
        );
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message || "An error occurred during login.",
        );
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row  grid-rows-1 grid-rowss-3 gap-8 items-center justify-center h-screen  bg-cover bg-center bg-no-repeat bg-bgblue/30 bg-blend-overlay md:bg-contain">
      
        
      
      
      
      
      
      
      <Toaster position="top-center" reverseOrder={false} />
    <div className="block gap-4 text-center text-white ">
        <TextEffect per="char" preset="fade" className="text-3xl font-bold" delay={0}>
          MISSION
        </TextEffect>
        <TextEffect per="char" preset="blur" delay={0.5}>
          To implement and manage the City Government’s
        </TextEffect>
        <TextEffect per="char" preset="blur" delay={1.75}>
          technological resources and utilize 
          Information Communication
          Technology
        </TextEffect>
        <TextEffect per="char" preset="blur" delay={3.5}>
          in delivering efficient and adequate public service.
        </TextEffect>
      </div>

      <div className="flexbox shadow-xl ">
        <img src={ictLOGO} className=" w-10 md:w-36 h-10 md:h-36 object-contain mx-auto mb-6 mt-6"  />



        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-complementaryblue/90 bg-blend-overlay p-4 rounded-lg shadow-xl w-full max-w-sm backdrop-grayscale"
        >
          <div className="form-group item-center justify-center">
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

          <div className="relative h-[80px] w-[260px] overflow-hidden rounded-md border border-zinc-950/10 text-zinc-700 outline-hidden dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300">
            <BorderTrail
              className="bg-linear-to-l from-green-200 via-green-500 to-green-200 dark:from-green-400 dark:via-green-500 dark:to-green-700"
              size={60}
            />

            <div className="flex flex-col h-[160px] w-[260px] gap-1 bg-bgblue/60 bg-blend-overlay p-2 rounded-lg shadow-md w-full max-w-sm">
              <h1 className="block text-md font-medium text-center text-white">
                Don't have an account?
              </h1>
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="p-1 bg-green-700 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mt-0"
              >
                Register
              </button>
            </div>
          </div>
        </form>
        
      </div>
<div className="block  gap-4 text-center text-white">
        <TextEffect per="char" preset="fade" className="text-3xl font-bold" delay={0}>
          VISION
        </TextEffect>
        <TextEffect per="char" preset="blur" delay={0.5}>
          The Information and Communication Technology Office 
        </TextEffect>
        <TextEffect per="char" preset="blur" delay={1.75}>
         as a model of excellence in leveraging information
        </TextEffect>
        <TextEffect per="char" preset="blur" delay={1.75}>
          communication technology towards a productive 
        </TextEffect>
         <TextEffect per="char" preset="blur" delay={3.5}>
         and efficient City Government by 2030.
        </TextEffect>
      </div>
    
    </div>
    
  );
};

export default Login;
