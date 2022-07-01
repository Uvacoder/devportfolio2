import { motion } from "framer-motion";

export const FadeUp = ({ delay, children }) => (
  <motion.div
    initial={{ opacity: 0, y: "80px" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: delay,
      duration: 0.5,
      type: "spring",
      stiffness: 50,
    }}
  >
    {children}
  </motion.div>
);

export const ScaleUp = ({ delay, children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.1, y: "40px" }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      delay: delay,
      duration: 0.7,
      type: "spring",
      stiffness: 300,
    }}
  >
    {children}
  </motion.div>
);

export const FadeDown = ({ delay, children }) => (
  <motion.div
    style={{ width: "100%", display: "flex", justifyContent: "center" }}
    initial={{ opacity: 0, y: "-40px" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: delay,
      duration: 0.5,
    }}
  >
    {children}
  </motion.div>
);
