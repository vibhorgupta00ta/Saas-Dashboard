import Layout from "../components/Layout";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Settings() {
  const [name, setName] = useState("Vibhor");
  const [email, setEmail] = useState("vibhor@email.com");

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Settings
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-10 rounded-3xl shadow-xl max-w-2xl"
      >
        <h2 className="text-2xl font-semibold text-white mb-6">
          Profile Information
        </h2>

        <div className="space-y-5">
          <div>
            <label className="text-gray-400 text-sm">Name</label>
            <input
              className="w-full mt-2 p-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              className="w-full mt-2 p-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-gray-400">Dark Mode</span>
            <button
              onClick={toggleTheme}
              className="px-6 py-2 bg-linear-to-r from-pink-500 to-purple-600 rounded-full text-white"
            >
              Toggle
            </button>
          </div>

          <button className="mt-8 w-full py-3 bg-white text-black rounded-full font-semibold hover:opacity-90 transition">
            Save Changes
          </button>
        </div>
      </motion.div>
    </Layout>
  );
}
