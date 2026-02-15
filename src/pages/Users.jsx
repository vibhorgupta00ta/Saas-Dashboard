import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userSlice";
import Layout from "../components/Layout";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Users() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((s) => s.users);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const usersPerPage = 5;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filtered = list.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / usersPerPage);
  const currentUsers = filtered.slice(
    (page - 1) * usersPerPage,
    page * usersPerPage
  );

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Users
      </h1>

      {/* Search */}
      <div className="mb-8">
        <div className="flex items-center bg-gray-900 border border-gray-800 rounded-2xl px-4 py-3">
          <Search className="text-gray-400" size={18} />
          <input
            placeholder="Search users..."
            className="ml-3 bg-transparent outline-none w-full text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-xl overflow-hidden">
        {loading ? (
          <p className="p-8 text-gray-400">Loading users...</p>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-5 text-left text-gray-400">Name</th>
                <th className="p-5 text-left text-gray-400">Email</th>
                <th className="p-5 text-left text-gray-400">Company</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className="border-t border-gray-800 hover:bg-gray-800/60 cursor-pointer transition"
                >
                  <td className="p-5 font-medium text-white">
                    {user.name}
                  </td>
                  <td className="p-5 text-gray-400">
                    {user.email}
                  </td>
                  <td className="p-5 text-gray-400">
                    {user.company?.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex gap-3 mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-xl ${
              page === i + 1
                ? "bg-linear-to-r from-pink-500 to-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            } transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 border border-gray-800 p-8 rounded-3xl w-100"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {selectedUser.name}
            </h2>
            <p className="text-gray-400 mb-2">
              Email: {selectedUser.email}
            </p>
            <p className="text-gray-400 mb-2">
              Phone: {selectedUser.phone}
            </p>
            <p className="text-gray-400">
              Company: {selectedUser.company?.name}
            </p>

            <button
              onClick={() => setSelectedUser(null)}
              className="mt-6 px-6 py-2 bg-linear-to-r from-pink-500 to-purple-600 rounded-full text-white"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
