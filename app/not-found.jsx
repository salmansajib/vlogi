"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; // Import the arrow icon
import { motion } from "framer-motion"; // Import framer-motion for animation

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h3 className="!text-[10rem] leading-none">404</h3>
      <h2 className="-mt-5">Page Not Found!</h2>
      {/* Wrap the Link in a motion.div to control hover */}
      <motion.div
        whileHover="hover" // Trigger hover state
        className="mt-2"
      >
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-500 px-4 py-[12px] !text-gray-50 hover:!text-gray-50 rounded-full transition-all flex items-center space-x-2"
        >
          <span>Return Home</span>
          {/* Animated arrow */}
          <motion.div
            variants={{
              hover: { x: 10 }, // Moves the arrow 10px to the right on hover
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiArrowRight className="ml-1" size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
