import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "" });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // === Custom validations ===
    if (!formData.role) {
      setMessage(" Please select a role.");
      return;
    }

    if (formData.password.length < 6) {
      setMessage(" Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://employeemanagmentbackend.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
        setMessage(" OTP Sent to Your Email. Please Verify.");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(" Error during registration");
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setMessage(" OTP is required to verify.");
      return;
    }

    setVerifying(true);
    try {
      const response = await fetch("https://employeemanagmentbackend.onrender.com/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setVerified(true);
        setMessage(" OTP Verified Successfully! Registration Complete.");
      } else {
        setMessage(" Invalid OTP. Try Again.");
      }
    } catch (error) {
      setMessage(" Error verifying OTP");
    }
    setVerifying(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-96 text-center border border-white/30"
      >
        <motion.h2 className="text-2xl font-bold text-white">Register</motion.h2>

        {!otpSent ? (
          <form className="mt-6 space-y-4" onSubmit={handleRegister}>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="relative">
              <div
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white flex justify-between items-center cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {formData.role || "Select Your Role"}
                <ChevronDownIcon className="w-5 h-5 text-white" />
              </div>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute w-full bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-md rounded-lg mt-2 shadow-lg overflow-hidden z-10"
                >
                  {["Employee", "Admin", "Team Leader"].map((role) => (
                    <li
                      key={role}
                      className="px-4 py-2 hover:bg-pink-500 transition-colors duration-300 text-white cursor-pointer rounded-lg"
                      onClick={() => {
                        setFormData({ ...formData, role });
                        setDropdownOpen(false);
                      }}
                    >
                      {role}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-white text-sm text-center mb-4 p-2 rounded shadow-lg 
                  ${message.includes("✅") || message.includes("🎉") ? "bg-green-600" : "bg-red-600"}`}
              >
                {message}
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
                "Register"
              )}
            </motion.button>
          </form>
        ) : !verified ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 mt-6"
          >
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
              placeholder="Enter OTP"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVerifyOtp}
              disabled={verifying}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex justify-center items-center"
            >
              {verifying ? (
                <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Verify OTP"
              )}
            </motion.button>
          </motion.div>
        ) : (
          <p className="text-center text-green-300 mt-4">🎉 Registration Complete!</p>
        )}
      </motion.div>
    </div>
  );
};

export default Register;
