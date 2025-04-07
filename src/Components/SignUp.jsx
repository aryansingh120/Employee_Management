import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!role) {
      setError("Please select your role");
      return;
    }
    if (!validatePassword(password)) {
      setError("Weak Password: Must contain 1 uppercase, 1 number, 1 special char, and be at least 8 characters long.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await axios.post("https://yourapi.com/api/auth/signup", {
        name,
        email,
        password,
        role,
      });
      console.log("Signup Successful");
      
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-96 text-center border border-white/30"
      >
        <motion.h2 className="text-2xl font-bold text-white">Create an Account</motion.h2>
        <p className="text-white/80 mt-2">Sign up to get started</p>

        <form className="mt-6 space-y-4" onSubmit={handleSignup}>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="relative">
            <div
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white flex justify-between items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {role || "Select Your Role"}
              <ChevronDownIcon className="w-5 h-5 text-white" />
            </div>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute w-full bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-md rounded-lg mt-2 shadow-lg overflow-hidden"
              >
                {["Employee", "Admin", "Team Leader"].map((r) => (
                  <li
                    key={r}
                    className="px-4 py-2 hover:bg-pink-500 transition-colors duration-300 text-white cursor-pointer rounded-lg"
                    onClick={() => {
                      setRole(r);
                      setDropdownOpen(false);
                    }}
                  >
                    {r}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center mb-4 p-2 bg-white/20 rounded"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={loading}
            className="w-full py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg mt-4 flex items-center justify-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>

        <motion.p className="mt-4 text-white/70 text-sm">
          Already have an account? <a href="#" className="text-white font-bold">Login</a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;
