import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineArrowRight,
  HiOutlineInformationCircle,
} from "react-icons/hi";

function LandingPage() {
  const navigate = useNavigate();
  const isUserLoggedIn = () => {
    // Check token in localStorage or your authentication method
    const token = localStorage.getItem("token");
    return !!token; // Returns true if token exists, false otherwise
  };

  const handleAuthNavigation = () => {
    if (isUserLoggedIn()) {
      navigate("/chatroom");
    } else {
      navigate("/signup");
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header */}
      <motion.header
        className="text-4xl font-bold text-teal-600 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Baba's AI
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-5xl font-extrabold md:text-6xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Your Smart AI Assistant
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 text-base md:text-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          What if you had a Personal AI Assistant who talks to you like your
          Typical Nigerian Neighbor? Well now you can!
          <br /> Meet Baba's AI assistant that helps you simplify task and boost
          productivity with adequate fluency in pidgin as well as your native
          tongue and English
        </motion.p>
        <motion.div
          className="mt-6 flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Get Started Button */}
          <button
            onClick={handleAuthNavigation}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 text-sm md:text-base"
          >
            Get Started <HiOutlineArrowRight size={20} />
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default LandingPage;
