import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage=()=> {
    const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setLoading(true);
    try {
      const response = await axios.post("https://employeemanagmentbackend.onrender.com/api/auth/login", {
        email,
        password,
      });
      navigate("/authSuccess")
    //   console.log("User Data:", response.data);
    } catch (error) {
        // console.log("error =>",error?.response?.data?.message);
      setApiError(error?.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-96 text-center border border-white/30"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-white"
      >
        Welcome Back!
      </motion.h2>
      <p className="text-white/80 mt-2">Login to continue</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
      {apiError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-sm text-center mb-4 p-2 bg-red-600 rounded shadow-lg"
            >
              {apiError}
            </motion.div>
          )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg mt-4 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-5 h-5 border-4 border-white border-t-transparent rounded-full"
            />
          ) : (
            "Login"
          )}
        </motion.button>
      </form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-white/70 text-sm"
      >
        <a href="#" className="text-white font-bold">Forgot Password?</a>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-white/70 text-sm"
      >
        Don't have an account? <a href="#" className="text-white font-bold">Sign Up</a>
      </motion.p>
    </motion.div>
  </div>
  );
}

export default LoginPage
