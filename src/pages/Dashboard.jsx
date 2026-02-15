import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userSlice";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Users, Building2, Activity } from "lucide-react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.users);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, list.length]);

  const totalUsers = list.length;
  const totalCompanies = [
    ...new Set(list.map((user) => user.company?.name)),
  ].length;

  return (
    <Layout>
      <div className="relative">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Dashboard Overview
          </h1>
          <p className="text-gray-400 mt-2">
            Welcome back! Here's what’s happening today.
          </p>
        </div>

        {/* Stats Cards */}
        {loading ? (
          <p className="text-gray-400">Loading stats...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {/* Total Users */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl shadow-xl"
            >
              <div className="flex items-center justify-between">
                <Users className="text-purple-400" size={28} />
              </div>
              <p className="text-gray-400 mt-6">Total Users</p>
              <h2 className="text-4xl font-bold text-white mt-2">
                {totalUsers}
              </h2>
            </motion.div>

            {/* Companies */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl shadow-xl"
            >
              <Building2 className="text-pink-400" size={28} />
              <p className="text-gray-400 mt-6">Companies</p>
              <h2 className="text-4xl font-bold text-white mt-2">
                {totalCompanies}
              </h2>
            </motion.div>

            {/* Activity */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl shadow-xl"
            >
              <Activity className="text-green-400" size={28} />
              <p className="text-gray-400 mt-6">Active Rate</p>
              <h2 className="text-4xl font-bold text-white mt-2">
                100%
              </h2>
            </motion.div>

          </div>
        )}

        {/* Extra Section */}
        <div className="mt-16 bg-linear-to-r from-purple-600 to-pink-600 p-10 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-2">
            Need Help Growing?
          </h3>
          <p className="opacity-90">
            Upgrade your plan to unlock advanced analytics and insights.
          </p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Upgrade Now
          </button>
        </div>

      </div>
    </Layout>
  );
}
