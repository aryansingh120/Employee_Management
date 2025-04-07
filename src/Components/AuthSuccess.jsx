import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthSuccess = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      navigate("/mainLayout"); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    show && (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-500">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-96 text-center border border-white/30"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-400 shadow-lg"
          >
            ✅
          </motion.div>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            Login Successful!
          </motion.h2>
          <p className="text-white/80 mt-2">Redirecting to Dashboard...</p>
        </motion.div>
      </div>
    )
  );
};

export default AuthSuccess;
