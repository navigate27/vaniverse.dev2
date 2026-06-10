"use client";

import { motion } from "framer-motion";

const HoverText = ({ text }: { text: string }) => {
  return (
    <motion.span
      className="relative block overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        className="block text-dim"
        variants={{ initial: { y: 0 }, hover: { y: "-100%" } }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute left-0 top-0 block font-medium text-accent"
        variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default HoverText;
