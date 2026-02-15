import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all details.");
      return;
    }

    setError("");
    dispatch(login("dummy-token"));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-6">

      {/* Background Blur */}
      <div className="absolute w-100 h-100 bg-purple-600/30 rounded-full blur-3xl -top-25 -left-25"></div>
      <div className="absolute w-100 h-100 bg-pink-600/30 rounded-full blur-3xl -bottom-25 -right-25"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-10 rounded-3xl w-full max-w-md shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Welcome Back
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-400 rounded-xl text-sm">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-gray-400">Email</label>
          <div
            className={`flex items-center bg-gray-800 border ${
              error && !email ? "border-red-500" : "border-gray-700"
            } rounded-xl px-3 mt-2 focus-within:ring-2 focus-within:ring-purple-500`}
          >
            <Mail size={18} className="text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent p-3 outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-400">Password</label>
          <div
            className={`flex items-center bg-gray-800 border ${
              error && !password ? "border-red-500" : "border-gray-700"
            } rounded-xl px-3 mt-2 focus-within:ring-2 focus-within:ring-purple-500`}
          >
            <Lock size={18} className="text-gray-400" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent p-3 outline-none text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 font-semibold hover:opacity-90 transition disabled:opacity-50"
          disabled={!email || !password}
        >
          Login
        </button>
      </motion.div>
    </div>
  );
}
