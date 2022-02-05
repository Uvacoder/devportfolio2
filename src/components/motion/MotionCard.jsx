import { useState } from "react";
import { motion } from "framer-motion";

export function MotionCard({ children, id, subTitle, title, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ x: isHovered ? -100 : 0 }}
    >
      <motion.h5>{"subTitle"}</motion.h5>
      <motion.h2>{"title"}</motion.h2>
    </motion.div>
  );
}
